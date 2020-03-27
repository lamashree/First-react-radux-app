import {combineReducers} from 'redux';
import userLists from './userListReducer';
const rootReducer = combineReducers({userLists});
export default rootReducer;