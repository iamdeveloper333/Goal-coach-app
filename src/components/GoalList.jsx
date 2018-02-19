import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import {setgoals} from '../actions';
import {goalRef} from '../firebase';
import GoalItem from './GoalItem';


class GoalList extends Component {
componentDidMount(){
    goalRef.on('value',snap=>{
        let goals=[];
        snap.forEach(goal=>{
            const {email,title} =goal.val();
            const serverKey= goal.key;
            goals.push({email,title,serverKey});
        })
        console.log('goals',goals);
        this.props.setgoals(goals);
    })
    }

  render() {
    console.log('this.props.goals',this.props.goals);
    return (
      <div style={{padding: '2% 10%'}}>
          
       { this.props.goals.map((goal,i)=>{
            return (
            <GoalItem key={i} goal={goal}/>
            )
        })
        }
      </div>
    );
  }
}
function mapStateToProps(state){
    const {goals} = state;
    return {
        goals}
        
}

export default connect(mapStateToProps,{setgoals})(GoalList);
