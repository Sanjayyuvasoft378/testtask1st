import {LOGIN_SUCCESS, REGISTRATION_SUCCESS } from "../action/ActionType";
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
        console.log("token is gemnerate",token)
    
        localStorage.setItem("Token",token)
        window.location.href=('/dashboard')
        return {
            ...state,
            userData: action.user
        }

         default:
            return state
    }
   

}
export default Reducer;