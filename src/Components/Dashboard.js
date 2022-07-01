import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../redux/action/Action";
import Table from 'react-bootstrap/Table';
export default function GetPost() {
  // const posts = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Dashboard());
  }, []);
  }
  return (
    <div>
      <Table striped bordered hover className="table">
      <button style={{backgroundColor:"green",padding:"7px"} } onClick={()=>navigater("/addpost")}>AddPost</button>
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
        {posts?.map((item, index) => {
          return (
            <tbody>
            <tr key={index}>
              <td><p>{item.name}</p></td>
              <td><p>{item.email}</p></td>
              <td><p>{item.password}</p></td>
              <td><p>{item.phone}</p></td>
              <td><p>{item.userType}</p></td>
             <td> <button style={{backgroundColor:"green",padding:"7px"}} onClick={()=>singlePost(item.id)}>View</button>&nbsp;
              <button style={{backgroundColor:"yellow",padding:"7px"}} onClick={()=>navigater(`/update/${item.id}`)}>Edit</button> &nbsp;
              <button style={{backgroundColor:"red",padding:"7px"}} onClick={()=> deletepost(item.id)}>delete</button>&nbsp;
              </td>
            </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}
