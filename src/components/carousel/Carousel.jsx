import React, { Component } from "react";
import ImageSlide from "./ImageSlider";
import Arrow from "./Arrow";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.getUrl = props.getUrl;
    this.getText = props.getText;

    this.state = {
      currentImageIndex: 0,
      imgUrls: this.getUrl,
      imgText: this.getText
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  previousSlide() {
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    //console.log(this.state.imgText);
    const leftArrow = (
      <i className="fa fa-chevron-circle-left" aria-hidden="true" />
    );
    const rightArrow = (
      <i className="fa fa-chevron-circle-right" aria-hidden="true" />
    );

    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph={leftArrow}
        />

        <ImageSlide
          url={this.state.imgUrls[this.state.currentImageIndex]}
          text={this.state.imgText[this.state.currentImageIndex]}
        />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph={rightArrow}
        />
      </div>
    );
  }
}
export default Carousel;
