import { SET_HOTEL_COMMENTS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SET_HOTEL_COMMENTS:
            const filteredState = () => {
                return state.filter((comment) => {
                    return comment.hotel_id !== action.payload[0].hotel_id
                })
            }

            return [...filteredState(), ...action.payload];
            
        default:
            return state;
    }
}