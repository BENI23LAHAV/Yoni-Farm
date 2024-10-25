import React, { useState } from "react";
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
          src={image}
          alt={`image ${i}`}
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
            src={currentImage}
            alt="full screen"
            className="full-screen-image"
          />
        </div>
      )}
    </div>
  );
};

export default Galery;
