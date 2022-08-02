
import {EDIT_USER, LOGIN_REQUEST, REGISTRATION_REQUEST, UPDATE_REQUEST, UPDATE_SUCCESS } from "./ActionType" 
export const RegistrationPage = (data) =>{
    console.log(" registration action has been called",data)
    return {
        type : REGISTRATION_REQUEST,
        payload:data
    }
}

export const LoginPage = (data) =>{
    console.log("Login Action has been called",data);
    return {
        type: LOGIN_REQUEST,
        payload :data
    }
}
export const UpdateData = (data,id) => {
    console.log("data updated",data)
    return{
        type : UPDATE_REQUEST,
        payload:data,
        id:id

    }   
}

export const EditUser = (id) => {
    debugger
    return {
      type: EDIT_USER,
      payload: id,
    };
  };




