import React from "react";
import NavBar from "../NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { TextField,Button } from "@material-ui/core";

const RegistrationForm = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-4 offset-md-4">
          <div className="container text-center">
            <img src="http://via.placeholder.com/150x150" alt="" />
          </div>
          <h1 className="text-center">Register Here!!!</h1>

          <form>
            {/**userName field*/}
            <TextField
              className="form-control mb-3"
              id="standard-basic"
              label="User Name"
            />

            {/**userName field*/}
            <TextField
              className="form-control mb-3"
              id="standard-basic"
              label="Password"
            />
            {/**firstName field*/}
            <TextField
              className="form-control mb-3"
              id="standard-basic"
              label="First Name"
            />
            {/**lastName field*/}
            <TextField
              className="form-control mb-3"
              id="standard-basic"
              label="Last Name"
            />
            {/**e-mail field*/}
            <TextField
              type="eamil"
              className="form-control mb-3"
              id="standard-basic"
              label="E-mail Address"
            />
            {/**phone number field*/}
            <TextField
              type="number"
              className="form-control mb-3"
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
