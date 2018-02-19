import React, { Component } from 'react';
import './style.css';
import {completeGoalRef} from '../firebase';
import {connect} from 'react-redux';
import {setcompleted} from '../actions';


class CompleteGoalList extends Component {
    componentDidMount(){
        completeGoalRef.on('value',snap=>{
            let completeGoals=[];
            snap.forEach(completeGoal=>{
                const {email,title} =completeGoal.val();
                completeGoals.push({email,title});
            })
            this.props.setcompleted(completeGoals);

        })
        }
    constructor(props){
        super(props);
        this.clearall = this.clearall.bind(this);
    }
    clearall(){
        completeGoalRef.set([]); 
    }
  render() {
    return (
        <div style={{padding:'2% 10%'}}>
          
       { this.props.completeGoals.map((completegoal,i)=>{
           const {title,email} = completegoal;
            return (
            <div key={i} className="completegoal">
              <strong>{title}</strong> completed by <em>{email}</em>
            </div>
            )
        })
        }
        <button className="btn btn-lg btn-danger" onClick={this.clearall}>Clear All</button>
      </div>
    );
  }
}

function mapStateToProps(state){
    const {completeGoals} = state;
    return {
        completeGoals}
        
}

export default connect(mapStateToProps,{setcompleted})(CompleteGoalList);
