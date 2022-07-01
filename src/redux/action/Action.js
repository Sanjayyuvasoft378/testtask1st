
import { GET_DASHBOARD_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTRATION_REQUEST } from "./ActionType" 
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

export const Dashboard = () => {
    console.log("dashboard page reloaded");
    return {
        type : GET_DASHBOARD_REQUEST
    }
}


