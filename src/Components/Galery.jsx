import { useState, useEffect } from "react";
import { farmImages as images } from "../Components/Sourses";

const BATCH_SIZE = 10;
const DELAY_MS = 2000;

const Galery = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [batchIndex, setBatchIndex] = useState(1);

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

  useEffect(() => {
    if (batchIndex * BATCH_SIZE >= images.length) return;
    const timer = setTimeout(() => {
      setBatchIndex((prev) => prev + 1);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, [batchIndex, images.length]);

  return (
    <div className="galery">
      {images.slice(0, batchIndex * BATCH_SIZE).map((image, i) => (
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
