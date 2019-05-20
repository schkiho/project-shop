import React from "react";

const ImageSlide = ({ url, text }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "350px",
    height: "350px"
  };

  return (
    <div className="image-slide" style={styles}>
      <h3 className="slider-text">{text}</h3>
    </div>
  );
};

export default ImageSlide;
