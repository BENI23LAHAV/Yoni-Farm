import React, { useState } from "react";
import TeamFarm from "./TeamFarm";
import {
  home_images,
  home_images2 as images,
  getCurrentElements,
  handleNext,
  handlePrev,
} from "../Components/Sourses";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    console.log("currentImage", currentImage);
    console.log(visible);

    setCurrentImage(image);
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
    setCurrentImage("");
  };

  const [information, setInformation] = useState(
    "החווה של חן ממוקמת ביישוב מזכרת בתיה באיזור השפלה.בחווה תוכלו למצוא את מיטב המדריכים המנוסים שלנו. עשרות ילדים אשר חווים את הרכיבה באופן חווייתי מידי שבוע. תוכלו גם למצוא פינת חיי יפייפיה, מאהל בדואי אותנטי, ומרחבים מרחיבי דעת."
  );
  const [imagesIndex, setImagesIndex] = useState(
    Math.floor(Math.random() * images.length)
  );

  const [opening, setOpening] = useState([
    { day: "א", isOpen: true, from: "09:00", to: "19:00" },
    { day: "ב", isOpen: true, from: "09:00", to: "19:00" },
    { day: "ג", isOpen: true, from: "09:00", to: "19:00" },
    { day: "ד", isOpen: true, from: "09:00", to: "19:00" },
    { day: "ה", isOpen: true, from: "09:00", to: "19:00" },
    { day: "ו", isOpen: true, from: "09:00", to: "14:00" },
    { day: "שבת", isOpen: false, from: "00:00", to: "00:00" },
  ]);
  if (false) {
    setOpening([]);
  }
  return (
    <div className="home">
      <div className="home-text ">
        {sliceStringToArr(information).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="home-images">
        {getCurrentElements(images, imagesIndex, 2).map((item, index) => (
          <img
            alt={`image ${index}`}
            src={item}
            key={index}
            className="home-image"
            onClick={() => handleImageClick(item)}
          />
        ))}
      </div>
      <TeamFarm />

      <h2>שעות פעילות</h2>

      <div className="opening-text">
        <ul>
          {opening.map((item, index) => (
            <li key={index}>{`יום: ${item.day} ${
              item.isOpen ? item.from + " - " + item.to : "סגור"
            }`}</li>
          ))}
        </ul>
      </div>
      {visible && (
        <>
          <div
            className="overlay"
            onClick={handleClose} // הוספת אירוע לחיצה על ה-overlay
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 999,
            }}></div>
          <div
            className="modal"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
              zIndex: 1000,
            }}>
            <div
              className="modal-content"
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <span
                className="close"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}>
                &times;
              </span>
              <img
                src={currentImage}
                alt="Modal"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

function sliceStringToArr(string) {
  // const arr = string.split(/[.,]/);
  const arr = string.split(/(?<=[.,])/);
  console.log(arr);

  return arr;
}
