import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginPage } from "../redux/action/Action";
export default function Login() {
  console.log("loginpage here");
  const { register, handleSubmit ,formState: { errors },} = useForm();
  const dispatch = useDispatch();
  const user = useSelector(state => state)
  const onSubmit = data => {
    const get_data = JSON.parse(localStorage.getItem('User_Info')) 
    const c = get_data?.filter((item)=>item.email == data.email)
    if (c?.length>0){
      dispatch(LoginPage(data))
    }
    else{
        alert("please enter correct email and password")
    }
  }
  useEffect(() => {
      if (user?.Error && user.Error.length !== 0) {
        toast.error(`${user?.Error}`,
            { position: toast.POSITION.TOP_RIGHT })
    } else {
        if (user?.userData && user.userData.length !== 0 ) {
            toast.success(`${user?.userData?.message[0]}`,
                { position: toast.POSITION.TOP_RIGHT })
                
        }
   }
}, [user])


  return (
    <div>
      <h1>Login Your Acount</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email</label>
        <br />
        <input
          {...register("email", { required: "please enter your email" })}
        />
         {errors.email && <p>Email  is required.</p>}
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          {...register("password", { required: "please enter password" })}
        />
         {errors.password && <p>Password  is required.</p>}
        <br />
        <br />
        <button>Login</button>
      </form>
      <button>forgot password</button>
      <h3>If you don't have an acount please sign up here -   <Link to="/registration">Signup</Link></h3>
    </div>
  );


  } 
