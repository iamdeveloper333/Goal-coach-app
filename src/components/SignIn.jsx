import React, { Component } from 'react';
import './style.css';
import {firebaseApp} from '../firebase';
import { Link } from 'react-router';

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        error:{
          message:''
        }
    }
    this.signin=this.signin.bind(this);
  }
  signin(e){
    e.preventDefault();
    console.log('this.state',this.state);
    const {email,password}=this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error=> {
     console.log('error',error);
     this.setState({error})
    });
  }
  render() {
    return (
      <div>
        <div className="text-center">
            <form className="form-signin">
              <h1 className=" header h3 mb-3 font-weight-normal">Please Sign In</h1>
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
              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signin}>Sign In</button>
            </form>
            <div>{this.state.error.message}</div>
            <div>
               <Link to="/signup" style={{color:"red"}}>Sign Up Instead</Link>
            </div>
        </div>
      </div>
    );
  }
}
