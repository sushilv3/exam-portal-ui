import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./components/pages/RegistrationForm";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";
import AboutUs from "./components/pages/AboutUs";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
function App() {
  return (
    <div className="container">
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={RegistrationForm} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact}  />
        
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
