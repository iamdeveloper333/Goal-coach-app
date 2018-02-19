import {SIGNED_IN,SET_GOALS,SET_COMPLETED} from '../constant.js';

export function logUser(email){
    const action={
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setgoals(goals){
    const action={
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setcompleted(completeGoals){
    const action={
        type: SET_COMPLETED,
        completeGoals
    }
    return action;
}
