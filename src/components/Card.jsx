import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuantity, subQuantity, removeItem } from "../actions/cardActions";
import "../App.css";

class Card extends Component {
  handleSubQuantity = id => {
    this.props.subQuantity(id);
  };

  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };

  handleRemoveItem = id => {
    this.props.removeItem(id);
  };

  render() {
    const { addedItems } = this.props.card.card;
    //console.log("card", addedItems);
    const cardItems = addedItems.map(item => {
      //console.log(item);
      return (
        <div className="jumbotron" key={item.id}>
          <h5 className="display-4">{item.title}</h5>
          <hr />
          <div className="row">
            <div className="col col-md-6">
              <h5>Image & Likes</h5>
              <hr />
              <img src={item.img} alt="jacket img" className="card-img-top" />
            </div>
            <div className="col col-md-6">
              <h5>Description</h5>
              <hr />
              <p>{item.desc}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col col-md-4">
              <p className="text-dark">
                <button
                  className="btn btn-dark pull-left mr-auto"
                  onClick={() => {
                    this.handleSubQuantity(item.id);
                  }}
                >
                  <i className="fa fa-minus-circle" />
                </button>
                <span className="item-counter">{item.quantity}</span>
                <button
                  className="btn btn-dark pull-right "
                  onClick={() => {
                    this.handleAddQuantity(item.id);
                  }}
                >
                  <i className="fa fa-plus-circle" />
                </button>
              </p>
            </div>
            <div className="col col-md-4">
              <p className="text-dark">
                <span className="removeItem">Remove:</span>
                <button
                  className="btn btn-danger pull-right ml-auto"
                  onClick={() => {
                    this.handleRemoveItem(item.id);
                  }}
                >
                  <i className="fa fa-trash" />
                </button>
              </p>
            </div>
            <div className="col col-md-4">
              <p className="text-dark">
                <u>Price: {item.price * item.quantity} ,- EUR</u>
              </p>
            </div>
          </div>
        </div>
      );
    });

    return <div className="container">{cardItems}</div>;
  }
}

const mapStateToProps = state => {
  return {
    card: state.card
  };
};

const mapDispatchToProps = dispatch => {
  return {
    subQuantity: id => {
      dispatch(subQuantity(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    removeItem: id => {
      dispatch(removeItem(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
