import {SET_COMPLETED} from '../constant.js';

export default (state=[],action) => {
    switch(action.type){
        case SET_COMPLETED:
        const {completeGoals}=action;
        return completeGoals;
        default:
        return state;
    }
}