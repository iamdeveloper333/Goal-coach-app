import {SIGNED_IN} from '../constant.js';

let user={
    email:null,
}

export default (state=user,action) => {
    switch(action.type){
        case SIGNED_IN:
        const {email}=action;
        user={
            email
        }
        return user;
        default:
        return state;
    }
}