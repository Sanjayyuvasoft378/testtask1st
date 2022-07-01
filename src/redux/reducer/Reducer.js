import { GET_DASHBOARD, LOGIN_SUCCESS, REGISTRATION_SUCCESS } from "../action/ActionType";

const initialData = {
    userData : [],
 }
 const Reducer = (state=initialData,action) =>{
    
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
        return {
            ...state,
            userData: action.user
        }


         default:
            return state
    }
   

}
export default Reducer;