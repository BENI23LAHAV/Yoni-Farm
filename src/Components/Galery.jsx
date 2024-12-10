import React, { useState, useEffect } from "react";
import { farmImages as images } from "../Components/Sourses";

const Galery = () => {
  const [fullScreenImage, setFullScreenImage] = useState(false);

  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    setCurrentImage("");
  };

  return (
    <div className="galery">
      {images.map((image, i) => (
        <img
          // style={{
          //   cursor: "pointer",
          //   ...(fullScreenImage
          //     ? {
          //         width: "100%",
          //         height: "100%",
          //       }
          //     : {}),
          // }}
          src={image.url}
          alt={image.alt}
          key={i}
          onClick={() => {
            handleImageClick(image);

            // setFullScreenImage((prev) => !prev);
          }}
        />
      ))}
      {visible && (
        <div className="overlay " onClick={handleClose}>
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="full-screen-image"
            style={{}}
          />
        </div>
      )}
    </div>
  );
};

export default Galery;
