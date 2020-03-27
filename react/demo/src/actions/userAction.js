import * as types from './actionType';

var sampleJson = [
    {
      "firstName": "Test",
      "lastName": "Test Test",
      "email": "test@gmail.com",
      "phone": "XXXXXXXXXX"
    },
    {
      "firstName": "Test Two",
      "lastName": "Test Test",
      "email": "testtwo@gmail.com",
      "phone": "XXXXXXXXXX"
    },
    {
      "firstName": "Test Thrid",
      "lastName": "Test Test",
      "email": "testthrid@gmail.com",
      "phone": "XXXXXXXXXX"
    }
  ] 

export function loadUserLists(userLists){
    return {type:types.load_user_todolist, userLists}
}

export function loadUserData() {
    console.log('this is working ')
    return function (dispatch) {
        dispatch(loadUserLists(sampleJson))
    }
}
