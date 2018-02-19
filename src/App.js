import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {firebaseApp} from './firebase';
import {logUser} from './actions';
import reducer from './reducers';
import {Router, Route, browserHistory} from 'react-router';
 

const store= createStore(reducer);

export default class App extends Component {
  componentWillMount(){
    firebaseApp.auth().onAuthStateChanged(user=> {
      if (user) {
        console.log('user has signed in or up',user);
        const {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
      } else {
        console.log('user has signed out'); 
        browserHistory.replace('/signin');
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
         <Router path="/" history={browserHistory}>
            <Route path="/app" component={Main}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
          </Router>
      </Provider>
    );
  }
}


