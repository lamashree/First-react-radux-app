import * as types from './actionType';
import UserApi from '../api/userApi'


export function loadUserLists(userLists){
    return {type:types.load_user_todolist, userLists}
}

export function loadUserData() {
    console.log('this is working ')
  return function (dispatch) {
      return UserApi.loadUserLists().then(response => {
    console.log(response)
    dispatch(loadUserLists(response.data.data))
  })
  
  }
}




export function addUserData(sampleData) {
  console.log('this is a add user sampleData', sampleData)
  return function (dispatch) {
     return UserApi.addUsers(sampleData).then(response =>{
    //  dispatch(loadUserLists(sampleJson)) 
      return response;
    });
  };
}

