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
  const [information, setInformation] = useState(
    "החווה של חן ממוקמת ביישוב מזכרת בתיה באיזור השפלה.בחווה תוכלו למצוא את מיטב המדריכים המנוסים שלנו. עשרות ילדים אשר חווים את הרכיבה באופן חווייתי מידי שבוע. תוכלו גם למצוא פינת חיי יפייפיה, מאהל בדואי אותנטי, ומרחבים מרחיבי דעת."
  );
  const [imagesIndex, setImagesIndex] = useState(0);
  // setInterval(() => {
  //   handleNext(setImagesIndex);
  // }, 2000);
  const [opening, setOpening] = useState([
    { day: "א", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ב", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ג", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ד", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ה", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ו", isOpen: true, from: "10:00", to: "14:00" },
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
        {/* {images.map((item, index) => (
          <img
            alt={`image ${index}`}
            src={item}
            key={index}
            className="home-image"
          />
        ))} */}
        {getCurrentElements(images, imagesIndex, 2).map((item, index) => (
          <img
            alt={`image ${index}`}
            src={item}
            key={index}
            className="home-image"
          />
        ))}
      </div>
      <TeamFarm />

      <h2>שעות פתיחה</h2>

      <div className="opening-text">
        <ul>
          {opening.map((item, index) => (
            <li key={index}>{`יום: ${item.day} ${
              item.isOpen ? item.from + " - " + item.to : "סגור"
            }`}</li>
          ))}
        </ul>
      </div>
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
