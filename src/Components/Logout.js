import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Logout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('User_Login_Info');
    window.location.href=('/')
  return (
    <>
            <h1>User is no more</h1>
            <button onClick={Logout}>logout</button>
          </>
  )
}
export default Logout