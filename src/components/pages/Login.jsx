import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setLoginData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <h1>login component</h1>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="container text-center">
              <img src="http://via.placeholder.com/150x150" alt="" />
            </div>
            <h1 className="text-center">Login Here!!!</h1>

            <form>
              {/**userName field*/}
              <TextField
                required
                className="form-control mb-3"
                name="userName"
                onChange={inputEvent}
                value={loginData.userName}
                id="standard-basic"
                label="User Name"
              />

              {/**password field*/}
              <TextField
                required
                className="form-control mb-3"
                name="password"
                onChange={inputEvent}
                value={loginData.password}
                id="standard-basic"
                label="Password"
              />
              <div className="container text-center">
                <Button type="submit" variant="contained" color="primary">
                  Log in
                </Button>
                <Button className="ms-3" variant="contained" color="secondary">
                  Clear
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
