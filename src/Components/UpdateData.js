// import React from "react";
// import { Modal, Button } from "react-bootstrap";
// import { useState } from "react";
// import { useEffect } from "react";

// const Postupdate = (props) => { 
//   console.log('props', props)
//   const [state,setState] = useState({
//     name:'',
//     email:'',
//     password:'',
//     phone:'',
//     userType:''
//   }) 

//   const data = JSON.parse(localStorage.getItem("User_Info"));
//   const updatePost = (data) => {
//     console.log("data ",data)
//     console.log("object",state);
//     const a = [data.map((item) =>{
//       if (item.email == state.email) {
//         return state
//       }
//       else
//       return item;
//     })]
//     localStorage.setItem("User_Info", JSON.stringify(a[0]));
//   };
//   return (
//     <div>
//       <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//         <Modal.Header closeButton>
//         </Modal.Header>
//         <label>First Name</label>
//         <input type="text" placeholder="firstName" value={state.name}
//           onChange={(e)=>setState({...state,name:e.target.value})}
//         /><br />
//         <label>Email</label>
//         <input type="email" placeholder="Enter Number" value={state.email}
//           onChange={(e)=>setState({...state,email:e.target.value})}/>
//         <br />
//         <label>Phone Number</label>
//         <input type="number" placeholder="Enter Role" value={state.phone}
//           onChange={(e)=>setState({...state,phone:e.target.value})}
//         /><br />
//         <label>User Role</label>
//         <input type="role"  placeholder="Enter Role" value={state.userType}
//           onChange={(e)=>setState({...state,userType:e.target.value})}
//         /><br />
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.onHide}> Close  </Button>
//           <Button variant="primary" onClick={()=>updatePost(data)}> Update </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };
// export default Postupdate;


