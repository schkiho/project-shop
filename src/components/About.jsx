import React from "react";
import { connect } from "react-redux";
import "../App.css";

const About = ({ owner }) => {
  return (
    <div className="jumbotron m-4 rounded">
      <h1 className="text-center p-4">About {owner[0].company} and the Team</h1>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 p-5">
          <p>{owner[0].philosophie}</p>
        </div>
      </div>
      <hr />
      <h1 className="text-center p-4">Our Team</h1>
      <div className="row text text-center p-2 justify-content-center">
        <div className="col-8 col-md-3">
          <img src={owner[0].manager} alt="manager" className="avatar-image" />
          <h5 className="pt-3">The Manager</h5>
          <p>{owner[0].name}</p>
        </div>
        <div className="col-8 col-md-3">
          <img
            src={owner[0].sales}
            alt="sale-manager"
            className="avatar-image"
          />
          <h5 className="pt-3">Sales-Manager</h5>
          <p>{owner[0].sales_manager}</p>
        </div>
        <div className="col-8 col-md-3">
          <img
            src={owner[0].logistic}
            alt="logistic-manager"
            className="avatar-image"
          />
          <h5 className="pt-3">Logistic-Manager</h5>
          <p>{owner[0].logistic_manager}</p>
        </div>
        <div className="col-8 col-md-3">
          <img
            src={owner[0].support}
            alt="support-manager"
            className="avatar-image"
          />
          <h5 className="pt-3">Support-Manager</h5>
          <p>{owner[0].support_manager}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  owner: state.owner
});

export default connect(mapStateToProps)(About);
