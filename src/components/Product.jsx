import React from "react";
import { connect } from "react-redux";

const Product = props => {
  const { products } = props.card;
  console.log(props.card.products);
  const getId = props.match.params.id;
  const ProductDetail = products.map((product, index) => {
    //console.log(index + 1);
    console.log(product.id);
    if (+getId === +index + 1) {
      return (
        <div key={product.id} className="jumbotron m-4">
          <h5 className="display-3">{product.title}</h5>
          <hr />
          <div className="row">
            <div className="col col-md-6">
              <h5>Image & Likes</h5>
              <hr />
              <img
                src={product.img}
                className="productImage"
                alt="jacket img"
              />
            </div>
            <div className="col col-md-6">
              <h5>Description</h5>
              <hr />
              <p>{product.desc}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <p className="text-dark">
                <b>
                  <u>Price: {product.price} EUR</u>
                </b>
              </p>
            </div>
          </div>
        </div>
      );
    }
  });
  return <div>{ProductDetail}</div>;
};

const mapStateToProps = state => {
  return { card: state.card };
};
export default connect(mapStateToProps)(Product);
