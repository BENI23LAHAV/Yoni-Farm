import React, { useState } from "react";
import TeamFarm from "./TeamFarm";

const Home = () => {
  const [information, setInformation] = useState(
    "החווה של חן ממוקמת ביישוב מזכרת בתיה באיזור השפלה.בחווה תוכלו למצוא את מיטב המדריכים המנוסים שלנו. עשרות ילדים אשר חווים את הרכיה באופן חווייתי מידי שבוע תוכלו גם למצוא פינת חיי יפייפיה, מאהל בדואי אותנטי, ומרחבים מרחיבי דעת."
  );
  const [images, setImages] = useState([
    "https://www.horizonstructures.com/wp-content/uploads/2022/06/Horse-Barns-1024x575.jpg",
    "https://wineandcountrylife.com/wp-content/uploads/2021/11/BD-Builders_Custom-Barn_BD_Dryden_143.jpg",
  ]);

  const [opening, setOpening] = useState([
    { day: "א", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ב", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ג", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ד", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ה", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ו", isOpen: true, from: "10:00", to: "14:00" },
    { day: "שבת", isOpen: false, from: "00:00", to: "00:00" },
  ]);
  return (
    <div className="home">
      <div className="home-text">
        {sliceStringToArr(information).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="home-images">
        {images.map((item, index) => (
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
  const arr = string.split(/[.,]/);
  // const arr = string.split(/(?<=[.,])/);
  console.log(arr);

  return arr;
}
