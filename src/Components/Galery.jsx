import React, { useState, useEffect } from "react";
import { farmImages as images } from "../Components/Sourses";

const Galery = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible]);

  return (
    <div className="galery">
      {images.map((image, i) => (
        <img
          loading="lazy"
          src={image.url}
          alt={image.alt}
          key={i}
          onClick={() => handleImageClick(image)}
        />
      ))}

      {visible && currentImage && (
        <div className="overlay" onClick={handleClose}>
          <img src={currentImage.url} alt={currentImage.alt} />
        </div>
      )}
    </div>
  );
};

export default Galery;
