import {SET_HOTELS} from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case SET_HOTELS:
            return action.payload;
        default:
            return state;
    }
}