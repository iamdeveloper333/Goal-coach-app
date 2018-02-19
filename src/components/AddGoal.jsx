import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state={
        title:''
    }
    this.addgoal=this.addgoal.bind(this);
  }
  addgoal(e){
    e.preventDefault();
    console.log('this.state',this.state);
    const {title} = this.state;
    const {email} = this.props.user;
    goalRef.push({email,title});
  }
  render() {
    return (
      <div>
        <div className="text-center">
            <form style={{width:'25%',margin:'0px auto',padding: '2% 1%'}}>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail"
               className="form-control"
                placeholder="Add a goal"
                onChange={event=>this.setState({title:event.target.value})}
                required autoFocus/>
              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.addgoal}>Submit</button>
            </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
    const {user} = state;
    return {
        user}
        
}

export default connect(mapStateToProps,null)(AddGoal);
