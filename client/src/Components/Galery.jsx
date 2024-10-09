import React, { useState } from "react";

const images = [
  "https://t4.ftcdn.net/jpg/09/35/82/01/360_F_935820146_j4JM76FvHZyaKxMqJBpnFqmOeCMkxMKO.jpg",
  "https://petapixel.com/assets/uploads/2023/05/McCullough-Peaks-HMA-004-800x534.jpg",
  "https://ka-hi.com/wp-content/uploads/sites/2/2021/11/pexels-helena-lopes-1996333-scaled.jpg",
  "https://thumbor.bigedition.com/img/ghODfZUtnTpaz_0cLoFBGGYzZ6s=/0x63:800x483/476x249/filters:quality(80)/granite-web-prod/33/d3/33d3f717ec4c4c9289ed3785db2ed8f2.jpeg",
  "https://images.photowall.com/products/54866/horses-3.jpg?h=699&q=85",
  "https://hips.hearstapps.com/countryliving/assets/17/16/1492442048-gettyimages-521282782.jpg",
  "https://adventures.is/media/226889/icelandic-horse-walking-clouds.jpg?anchor=center&mode=crop&width=970&height=645&rnd=133592106080000000&format=jpg&quality=80",
  "https://www.bluecross.org.uk/sites/default/files/d8/styles/theme_feature_extra_large/public/assets/images/111432lpr.jpg.webp?itok=p4cGtPP_",
];
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
