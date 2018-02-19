import {combineReducers} from 'redux';

import user from './reducers_user';
import goals from './reducers_goals';
import completeGoals from './reducers_completed_goals';

export default combineReducers({
    user,
    goals,
    completeGoals
})