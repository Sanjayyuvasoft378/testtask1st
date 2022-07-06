import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import 'react-pro-sidebar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isVisible, setIsVisible] = useState(false);
  const [name, setfirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setNumber] = useState();
  const [userType, setRole] = useState();
  const {id} = useParams();
  const data = JSON.parse(localStorage.getItem("User_Info"));
 
  const Edit = (name, email, phone, userType,id ,index) => {
    setShow(true)
   console.log("editable data",index)
    console.log("object",data);
    setIsVisible(true);
    setfirstName(name);
    setEmail(email);
    setPassword(password);
    setNumber(phone);
    setRole(userType);

  };
  const handleDelete = (id) => {
    console.log(32342, id)
    const filterdata = data.filter((item, index) => index != id)
    console.log(333, filterdata)
    localStorage.setItem("User_Info", JSON.stringify(filterdata))
    window.location.href = "/dashboard"
  }
  const updatePost = (name, email, password, phone, userType) => {
    const data = JSON.parse(localStorage.getItem("User_Info"));
    data.name= name;
    data.email = email;
    data.phone = phone;
    data.password= password;
    data.userType= userType;
    const c= [data.map((item)=>{
      if(item.email==email){
        return data;
      }else{
        return item;
      }
    })];
    localStorage.setItem('User_Info',JSON.stringify(c));
  };

  const closeModal = () => {
    setIsVisible(true)
  }

  return (
    <div>
      {isVisible && (
        <Modal
        isVisible={isVisible}
        closeModal={closeModal}
        name={name}
        email={email}
        password={password}
        phone={phone}
        userType={userType}
        updatePost={updatePost}

        />
      )}
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
        {data?.map((item, index) => {
          return (
            <tbody>
            <tr key={index}>
              <td><p>{item.name}</p></td>
              <td><p>{item.email}</p></td>
              <td><p>{item.phone}</p></td>
              <td><p>{item.userType}</p></td>
             <td>
              <button onClick = {()=> Edit(item.name,item.email,item.phone,item.userType, item.id,index) }  style={{backgroundColor:"yellow",padding:"7px"}} >Edit</button> &nbsp;
              <button onClick={()=> handleDelete(index)} style={{backgroundColor:"red",padding:"7px"}} >delete</button>&nbsp;
              </td>
            </tr>
            </tbody>
          );
        })}
      </Table>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
