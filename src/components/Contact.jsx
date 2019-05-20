import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import Location from "../map/Map";
import EmailSubmit from "./EmailSubmit";

class Contact extends Component {
  state = {
    show: false,
    email: "",
    context: ""
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleContextChange = e => {
    this.setState({ context: e.target.value });
  };

  showModal = () => {
    this.setState({ show: true, context: "", email: "" });
  };

  toggle = () => {
    this.setState(state => ({
      modal: !state.modal,
      show: false
    }));
  };

  render() {
    const { show, context, email } = this.state;
    const enabled = email.length > 0 && context.length > 0;
    return (
      <div className="container">
        <div className="col-12  mt-3 mb-3">
          <Location />
        </div>
        <div className="col-12 mt-3 mb-3">
          {}
          <form onSubmit={this.showModal}>
            <div className="form-group">
              <label htmlFor="email-address" />
              <input
                type="email"
                className="form-control"
                id="email-address"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
                required="required"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea" />
              <textarea
                className="form-control"
                type="text"
                id="textarea"
                rows="5"
                placeholder="Text Field"
                value={this.state.context}
                onChange={this.handleContextChange}
              />
            </div>
            <button
              className="btn btn-success btn-block"
              name="contactForm"
              type="button"
              onClick={this.showModal}
              disabled={!enabled}
            >
              Send
            </button>
          </form>
          <EmailSubmit show={show} toggle={this.toggle} />
        </div>
      </div>
    );
  }
}

export default Contact;
// REACT LEAFLET
