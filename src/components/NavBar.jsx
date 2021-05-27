import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row d-flex justify-content-center">
          <div className="col-10 max-auto">
            {/**/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  KodeCamp
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav ml-auto mb-2 mb-lg-0 "
                    style={{ marginLeft: "auto" }}
                  >
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link active"
                        exact
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/signin"
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/signup"
                      >
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
