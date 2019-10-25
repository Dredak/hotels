import {combineReducers} from 'redux';
import hotelsReducer from './hotelsReducer';
import commentsReducer from './commentsReduces';

export default combineReducers({
    hotels: hotelsReducer,
    comments: commentsReducer
});