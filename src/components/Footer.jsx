import React from "react";
import { connect } from "react-redux";
import logoImage from "../owner-logo/logo.png";
import ContentSlider from "./contentslider/ContentSlider";
import "../App.css";

const Footer = ({ owner }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="navbar navbar-light bg-default mt-3">
      <ContentSlider />
      <p className="text-center">
        <img src={logoImage} width="90px" alt="Footer Info" />{" "}
        <span className="owner-text">{owner[0].name}</span>{" "}
        <i className="fa fa-copyright" /> {year}
      </p>
    </footer>
  );
};

const mapStateToProps = state => ({
  owner: state.owner
});

export default connect(mapStateToProps)(Footer);
