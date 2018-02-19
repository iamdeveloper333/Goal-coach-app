import React, { Component } from 'react';
import './style.css';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';


class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.signout=this.signout.bind(this);
      }
      signout(e){
        e.preventDefault();
        firebaseApp.auth().signOut();
      }
  render() {
    return (
      <div className="main">
        <h2>GOAL COACH</h2>
        <AddGoal/>
        <hr/>
        <GoalList/><hr/>
        <CompleteGoalList/>
        <div style={{background: 'black',height:' 70px',paddingTop: '12px'}}>
        <button style={{background: 'white',width: '10%',color: 'black',margin: '0px auto'}} className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signout} >Sign Out</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
    console.log('state',state);
    return {};
}

export default connect(mapStateToProps,null)(Main);

