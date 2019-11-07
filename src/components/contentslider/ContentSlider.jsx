import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

class ContentSlider extends Component {
  render() {
    const { sponsors } = this.props;

    const settings = {
      dots: true,
      slidesToShow: 3,
      autoplay: true
    };
    return (
      <div className='content-container'>
        <Slider {...settings}>
          <div>
            <img src={sponsors[0].sponsor1} alt='sponsor-logo' />
          </div>
          <div>
            <img src={sponsors[0].sponsor2} alt='sponsor-logo' />
          </div>
          <div>
            <img src={sponsors[0].sponsor3} alt='sponsor-logo' />
          </div>
          <div>
            <img src={sponsors[0].sponsor4} alt='sponsor-logo' />
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sponsors: state.sponsors };
};

export default connect(mapStateToProps)(ContentSlider);
