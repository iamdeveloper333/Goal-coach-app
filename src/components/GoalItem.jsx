import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';

class GoalItem extends Component {
    constructor(props){
        super(props);
        this.completeGoal = this.completeGoal.bind(this);
    }
    completeGoal(){
        const {email} = this.props.user;
        const {title,serverKey} = this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email,title});
    }
  render() {
      const {email,title} = this.props.goal;
    return (
      <div className="goalitem">
        <button className="btn btn-lg btn-danger" onClick={this.completeGoal}>Complete </button>
        <strong>{title}</strong>
        <span>SUBMITTED BY - <em> {email} </em></span>   
      </div>
    );
  }
}

function mapStateToProps(state){
    const {user} = state;
    return {
        user}
        
}

export default connect(mapStateToProps,null)(GoalItem);
