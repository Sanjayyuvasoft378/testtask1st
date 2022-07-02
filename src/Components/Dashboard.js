import React from "react";
import Table from 'react-bootstrap/Table';
import 'react-pro-sidebar/dist/css/styles.css';
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
export default function Dashboard() {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("User_Info"))


  // const DeleteData = data => {
  //   const get_data = JSON.parse(localStorage.getItem('User_Info')) 
  //   const c = get_data?.filter((item)=>item.email == data.email)
  //   if (c.length>0){alert("This email is already exist")}
  //   else{dispatch(RegistrationPage(data))}
  // }
  return (
    <div>
     {/* <Sidebar /> */}
      <Table striped bordered hover align="center" cellPadding={'5px'} cellspacing={"40px"} className="table">
<thead>
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
        <tr>
          <th>Name</th>
          <th>Email</th>
          {/* <th>Password</th> */}
          <th>Phone</th>
          <th>User Type</th>
          <th>Action</th>
        </tr>
        <tr>
          <th colSpan={'6'}>
            <hr/>
          </th>
        </tr>
        </thead>
        {data.map((item, index) => {
          return (
            <tbody>
            <tr key={index}>
              <td><p>{item.name}</p></td>
              <td><p>{item.email}</p></td>
              {/* <td><p>{item.password}</p></td> */}
              <td><p>{item.phone}</p></td>
              <td><p>{item.userType}</p></td>
             <td>
              <button style={{backgroundColor:"yellow",padding:"7px"}} >Edit</button> &nbsp;
              <button style={{backgroundColor:"red",padding:"7px"}} >delete</button>&nbsp;
              </td>
            </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}
