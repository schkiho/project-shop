import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logoImage from "../owner-logo/logo.png";

const Navbar = ({ owner }) => {
  //console.log(owner);
  return (
    <div className="nav-container p-2 rounded">
      <nav className="navbar absolute-top navbar-expand-lg navbar-light bg-default">
        <Link to="/" className="navbar-brand">
          <img src={logoImage} width="100" alt="Store Logo" />{" "}
          <span className="owner-text">{owner[0].company}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item p-2 ">
              <NavLink to="/" className="nav-link">
                <i className="fa fa-home nav-icons" />
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/about" className="nav-link">
                <i className="fa fa-info-circle nav-icons" />
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/contact" className="nav-link">
                <i className="fa fa-envelope nav-icons" />
              </NavLink>
            </li>
            <li className="nav-item p-2 ">
              <NavLink to="/card" className="nav-link">
                <i className="fa fa-cart-plus nav-icons" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  owner: state.owner
});

export default connect(mapStateToProps)(Navbar);
