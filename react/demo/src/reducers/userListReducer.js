import initialState from './initialState';
import * as types from '../actions/actionType';
export default function UserListsReducers(state = initialState.userLists, action){
    switch(action.type){
        case types.load_user_todolist:
            return action.userLists
            default:
                return state;
    }
}
