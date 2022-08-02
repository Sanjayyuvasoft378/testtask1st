import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "react-pro-sidebar/dist/css/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Postupdate from "./UpdateData";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { EditUser } from "../redux/action/Action";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();
  const get_data = useSelector((state) => state?.user?.userData)
  console.log("get_data",get_data)

  const data = JSON.parse(localStorage.getItem("User_Info"));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
  setShow(true);
  dispatch(EditUser(id));
  }
  
  useEffect(()=>{
    
  },[])

  // const Postupdate = (props) => { 
  //   console.log('props', props)
    const [state,setState] = useState({
      name:'',
      email:'',
      password:'',
      phone:'',
      userType:''
    }) 
  
    // const data = JSON.parse(localStorage.getItem("User_Info"));
    const updatePost = (data) => {
      console.log("data ",data)
      console.log("object",state);
      
      const a = [data?.map((item) =>{
        debugger
        
      })]
      localStorage.setItem("User_Info", JSON.stringify(a[0]));
    };


  const handleDelete = (id) => {
    console.log(32342, id);
    const filterdata = data.filter((item, index) => index != id);
    console.log(333, filterdata);
    localStorage.setItem("User_Info", JSON.stringify(filterdata));
    window.location.href = "/dashboard";
  };
  // const handleEdit = (id) => {
  //   console.log(data)
  //   setModalShow(true);
  // };


  return (
    <div>
      <Table
        striped
        bordered
        hover
        align="center"
        cellPadding={"5px"}
        cellspacing={"40px"}
        className="table"
      >
        <thead>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User Type</th>
            <th>Action</th>
          </tr>
          <tr>
            <th colSpan={"6"}>
              <hr />
            </th>
          </tr>
        </thead>
        {data?.map((item, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.phone}</p>
                </td>
                <td>
                  <p>{item.userType}</p>
                </td>
                <td>
                  <button onClick={() => handleShow(index)}
                    style={{ backgroundColor: "yellow" }}
                  >
                    Edit Post
                  </button>{" "}
                  &nbsp;
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ backgroundColor: "red", padding: "7px" }}
                  >
                    delete
                  </button>
                  &nbsp;
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <Modal show={show} onHide={handleClose}
      // {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
        </Modal.Header>
        <label>First Name</label>
        <input type="text" placeholder="firstName" value={state.name}
          onChange={(e)=>setState({...state,name:e.target.value})}
        /><br />
        <label>Email</label>
        <input type="email" placeholder="Enter Number" value={state.email}
          onChange={(e)=>setState({...state,email:e.target.value})}/>
        <br />
        <label>Phone Number</label>
        <input type="number" placeholder="Enter Role" value={state.phone}
          onChange={(e)=>setState({...state,phone:e.target.value})}
        /><br />
        <label>User Role</label>
        <input type="role"  placeholder="Enter Role" value={state.userType}
          onChange={(e)=>setState({...state,userType:e.target.value})}
        /><br />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close  </Button>
          <Button variant="primary" onClick={()=>updatePost(data)}> Update </Button>
        </Modal.Footer>
      </Modal>
      {/* <Postupdate show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
      }