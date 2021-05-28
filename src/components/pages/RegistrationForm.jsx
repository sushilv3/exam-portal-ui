import React, { useState } from "react";
import NavBar from "../NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import base_url from '../../api/bootApi';
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    console.log(event.target.userName);
    console.log(event.target.password);
    console.log(event.target.firstName);
    console.log(event.target.lastName);
    console.log(event.target.email);
    console.log(event.target.phone);

    const { value, name } = event.target;
    setUserData((preValue) => {
      console.log("@@@@@@@@@@@@@@@@@ ", preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const RegistrationFormSubmit = (e) => {
    console.log("form submitted");
    console.log("called inside from resgistration form submittion", userData);
    postDataToServer(userData);
    e.preventDefault();
  };

  const postDataToServer = (userData) => {
   
    axios.post(`${base_url}/user/`,userData).then((response) => {
      console.log(response);
      console.log("success");
      toast.success("Registration successfully",{
        position: toast.POSITION.BOTTOM_RIGHT
      });
      // alert("register successfully");
    },(error)=>{
      console.log(error);
      console.log("something went wrong");
    });
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-4 offset-md-4">
          <div className="container text-center">
            <img src="http://via.placeholder.com/150x150" alt="" />
          </div>
          <h1 className="text-center">Register Here!!!</h1>

          <form onSubmit={RegistrationFormSubmit}>
            {/**userName field*/}
            <TextField
                        className="form-control mb-3"
              name="userName"
              onChange={inputEvent}
              value={userData.userName}
              id="standard-basic"
              label="User Name"
            />

            {/**password field*/}
            <TextField
                        className="form-control mb-3"
              name="password"
              onChange={inputEvent}
              value={userData.password}
              id="standard-basic"
              label="Password"
            />
            {/**firstName field*/}
            <TextField
                        className="form-control mb-3"
              name="firstName"
              onChange={inputEvent}
              value={userData.firstName}
              id="standard-basic"
              label="First Name"
            />
            {/**lastName field*/}
            <TextField
                        className="form-control mb-3"
              name="lastName"
              onChange={inputEvent}
              value={userData.lastName}
              id="standard-basic"
              label="Last Name"
            />
            {/**e-mail field*/}
            <TextField
                        type="email"
              className="form-control mb-3"
              name="email"
              onChange={inputEvent}
              value={userData.email}
              id="standard-basic"
              label="E-mail Address"
            />
            {/**phone number field*/}
            <TextField
                        type="number"
              className="form-control mb-3"
              name="phone"
              onChange={inputEvent}
              value={userData.phone}
              id="standard-basic"
              label="Phone Number"
            />
            <div className="container text-center">
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
              <Button className="ms-3" variant="contained" color="secondary">
                Clear
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
