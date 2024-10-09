import React, { useState } from "react";
const rightArrow = require("../Images/right-arrow.png");
const leftArrow = require("../Images/left-arrow.png");
const Home = () => {
  const [information, setInformation] = useState(
    "החווה של חן ממוקמת ביישוב מזכרת בתיה באיזור השפלה.בחווה תוכלו למצוא את מיטב המדריכים המנוסים שלנו. עשרות ילדים אשר חווים את הרכיה באופן חווייתי מידי שבוע תוכלו גם למצוא פינת חיי יפייפיה, מאהל בדואי אותנטי, ומרחבים מרחיבי דעת."
  );
  const [images, setImages] = useState([
    "https://www.horizonstructures.com/wp-content/uploads/2022/06/Horse-Barns-1024x575.jpg",
    "https://wineandcountrylife.com/wp-content/uploads/2021/11/BD-Builders_Custom-Barn_BD_Dryden_143.jpg",
  ]);
  const [farmTeams, setFarmTeams] = useState([
    {
      name: "יוני להב",
      title: "מנהל ראשי ומדריך",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV7bjGEmOGta3bXydiPduJUWNE9LKa2vVzQ&s",
    },
    {
      name: "דוד להב",
      title: "  אחראי תחזוקה וסייס",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV7bjGEmOGta3bXydiPduJUWNE9LKa2vVzQ&s",
    },
    {
      name: "יהודה להב",
      title: "  סייס",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV7bjGEmOGta3bXydiPduJUWNE9LKa2vVzQ&s",
    },
  ]);
  const [indexTeam, setIndexTeam] = useState(0);

  const [opening, setOpening] = useState([
    { day: "א", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ב", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ג", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ד", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ה", isOpen: true, from: "10:00", to: "22:00" },
    { day: "ו", isOpen: true, from: "10:00", to: "14:00" },
    { day: "שבת", isOpen: false, from: "00:00", to: "00:00" },
  ]);
  sliceStringToArr("hey.you,beni.");
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
      <div className="farm-team">
        <h2>צוות החווה</h2>
        <ul>
          <li>
            <img
              className="arrow-img"
              src={leftArrow}
              alt="left arrow"
              style={{ cursor: "pointer" }}
              onClick={() => handleNext(setIndexTeam)}
            />
          </li>
          {getCurrentImage(farmTeams, indexTeam).map((team, index) => (
            <li>
              <div className="team-images">
                <img src={team.image} alt={`${team.name}image`} />
                <h4>{team.name}</h4>
                <p>{team.title}</p>
              </div>
            </li>
          ))}
          <li>
            <img
              className="arrow-img"
              src={rightArrow}
              alt="right arrow"
              style={{ cursor: "pointer" }}
              onClick={() => handlePrev(setIndexTeam)}
            />
          </li>
        </ul>
      </div>
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
const getCurrentImage = (arr, index) => {
  const result = [];
  for (let i = 0; i < 3; i++) {
    const currentIndex = (Math.abs(index) + i) % arr.length;
    result.push(arr[currentIndex]);
  }
  return result;
};
const handleNext = (setIndex) => {
  setIndex((prev) => prev + 1);
};
const handlePrev = (setIndex) => {
  setIndex((prev) => prev - 1);
};
