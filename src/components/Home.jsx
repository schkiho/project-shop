import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cardActions";
import Carousel from "./carousel/Carousel";

class Home extends Component {
  handleAddItems = id => {
    this.props.addToCart(id);
  };

  render() {
    const { getUrl } = this.props.nextCollection;
    const { getText } = this.props.nextCollection;

    const { products } = this.props.card;
    const ProductCard = products.map(product => {
      console.log("hihi", this.props);
      return (
        <div className="card col-md-3 m-2" key={product.id}>
          <img
            src={product.img}
            alt="jacket img"
            className="card-img-top pt-2"
            id={product.id}
          />
          <hr />
          <h5 className="card.title mb-3">
            <Link to={`/product/${product.id}`} style={{ color: "black" }}>
              {product.title}
            </Link>
          </h5>
          <p className="card-text" style={{ height: 100 }}>
            {product.desc}
          </p>
          <hr />
          <div className="row p-3">
            <p className="mr-auto mt-2">EUR {product.price},- </p>
            {product.maxQuantity - product.quantity > 0 ? (
              <button
                className="btn btn-dark pull-right ml-auto"
                onClick={() => {
                  this.handleAddItems(product.id);
                }}
              >
                <i className="fa fa-cart-arrow-down" />{" "}
                <span className="badge badge-dark">
                  {" "}
                  {product.maxQuantity - product.quantity}
                </span>
              </button>
            ) : product.maxQuantity === product.quantity ? (
              <button className="btn btn-danger pull-right ml-auto">
                Sold out
              </button>
            ) : null}
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div id="top-carousel">
          <h4>COMING UP NEXT</h4>
          <Carousel getText={getText} getUrl={getUrl} />
        </div>
        <h4>WINTER COLLECTION 2019</h4>
        <div className="row justify-content-center ">{ProductCard}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card,
  nextCollection: state.nextCollection
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
