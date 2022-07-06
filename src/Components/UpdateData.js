import React, { useEffect } from "react";
import { Modal } from "bootstrap";
import { useState } from "react";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Postupdate = (props) => { 
  console.log('props', props)
  const [name, setfirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setNumber] = useState();
  const [userType, setRole] = useState();
  const [isVisible, setIsVisible] = useState();

  const handleChange1 = (e) => {
    console.log("handlechange1", e.target.value);
    setfirstName(e.target.value);
  };

  const closeModal = () => {
    console.log("Modal Closed");
    setIsVisible(false);
  };

  const handleChange2 = (e) => {
    console.log("handlechange2", e.target.value);
    setEmail(e.target.value);
  };

  const handleChange3 = (e) => {
    console.log("handlechange3", e.target.value);
    setNumber(e.target.value);
  };

  const handleChange4 = (e) => {
    console.log("handlechange4", e.target.value);
    setRole(e.target.value);
  };

  useEffect(() => {
    setfirstName(props.name);
    setEmail(props.email);
    setPassword(props.password);
    setNumber(props.phone);
    setRole(props.userType);
  }, []);

  return (
    <div>
      <Modal
        isOpen={props.isVisible}
        // onRequestClose={this.props.closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="firstName"
          value={name}
          onChange={handleChange1}
        /><br/><br/>

        <input
          type="number"
          placeholder="Enter Number"
          value={phone}
          onChange={handleChange2}
        />
        <br />
        <br />

        <input
          type="role"
          placeholder="Enter Role"
          value={userType}
          onChange={handleChange3}
        />
        <br />
        <br />

        <input
          type="role"
          placeholder="Enter Role"
          value={userType}
          onChange={handleChange4}
        />
        <br />
        <br />

        <button
          onClick={() =>
            props.updatePost(props.email, name, password, phone, userType)
          }
        >
          {" "}
          Update!!!{" "}
        </button>
        <button onClick={closeModal()}>close</button>
        <br />
        <br />
      </Modal>
    </div>
  );
};

export default Postupdate;


