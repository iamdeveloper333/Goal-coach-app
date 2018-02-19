import React, { Component } from 'react';
import './style.css';
import {firebaseApp} from '../firebase';
import { Link } from 'react-router';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        error:{
          message:''
        }
    }
    this.signup=this.signup.bind(this);
  }
  signup(e){
    e.preventDefault();
    console.log('this.state',this.state);
    const {email,password}=this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error=> {
     console.log('error',error);
     this.setState({error})
    });
  }
  render() {
    return (
      <div>
        <div className="text-center">
            <form className="form-signup">
              <h1 className="header style={{marginBottom:'10px'}}h3 mb-3 font-weight-normal">Please Sign Up</h1>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input style={{marginBottom:'10px'}} type="email" id="inputEmail"
               className="form-control"
                placeholder="Email address"
                onChange={event=>this.setState({email:event.target.value})}
                required autoFocus/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input style={{marginBottom:'10px'}} type="password" id="inputPassword" className="form-control" placeholder="Password"
              onChange={event=>this.setState({password:event.target.value})}
               required/>
              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signup}>Sign Up</button>
            </form>
            <div>{this.state.error.message}</div>
            <div>
               <Link to="/signin" style={{color:'red'}}>Sign In Instead</Link>
            </div>
        </div>
      </div>
    );
  }
}
