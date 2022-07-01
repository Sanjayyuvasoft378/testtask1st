import React from "react";
import Table from 'react-bootstrap/Table';
export default function Dashboard() {
  const data = JSON.parse(localStorage.getItem("User_Info"))
  return (
    <div>
      <Table striped bordered hover className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone</th>
          <th>User Type</th>
          <th>Action</th>
        </tr>
        </thead>
        {data.map((item, index) => {
          return (
            <tbody>
            <tr key={index}>
              <td><p>{item.name}</p></td>
              <td><p>{item.email}</p></td>
              <td><p>{item.password}</p></td>
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
