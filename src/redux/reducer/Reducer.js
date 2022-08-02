import {EDIT_USER_UP, LOGIN_SUCCESS, REGISTRATION_SUCCESS, UPDATE_SUCCESS } from "../action/ActionType";
// import { uuid } from "uuidv4";
const initialData = {
    userData : [],
 }
 const Reducer = (state=initialData,action) =>{
    console.log("gfggggggggggg")
    
    switch (action.type){
     case REGISTRATION_SUCCESS:
        const userInfo = state.userData.concat(action.user)
        localStorage.setItem("User_Info",JSON.stringify(userInfo))
        
         return {
             ...state,
             userData :state.userData.concat(action.user)
         }
     case LOGIN_SUCCESS:
        localStorage.setItem("User_Login_Info",JSON.stringify(action.user))
        const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log("token is generate",token)
    
        localStorage.setItem("Token",token)
        window.location.href=('/dashboard')
        return {
            ...state,
            userData: action.user
        }

     case UPDATE_SUCCESS:
        console.log("update reduce called")
        JSON.parse(localStorage.getItem("User_Info"));
        return {
            ...state,
            userData:action.user
        }

        case EDIT_USER_UP:
            debugger
            let alldata = JSON.parse(localStorage.getItem("User_Info"));
            const Record = alldata[action.payload];
            console.log("dd0", Record);
            return {
              ...state,
              userData: Record,
              id:action.payload,
            };
         default:
            return state
    }
   

}
export default Reducer;