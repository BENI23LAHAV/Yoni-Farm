import React, { useState, useEffect } from "react";

const rightArrow = require("../Images/right-arrow.png");
const leftArrow = require("../Images/left-arrow.png");

const TeamFarm = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // console.log(screenWidth);
  }, [screenWidth]);
  function handleResize() {
    setScreenWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);

  // const [farmTeams, setFarmTeams] = useState([
  //   {
  //     name: "יוני להב",
  //     title: "מנהל ראשי ומדריך",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV7bjGEmOGta3bXydiPduJUWNE9LKa2vVzQ&s",
  //   },
  //   {
  //     name: "דוד להב",
  //     title: "  אחראי תחזוקה וסייס",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV7bjGEmOGta3bXydiPduJUWNE9LKa2vVzQ&s",
  //   },
  //   {
  //     name: "יהודה להב",
  //     title: "  סייס",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV7bjGEmOGta3bXydiPduJUWNE9LKa2vVzQ&s",
  //   }
  // ]);
  const farmTeams = [
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
  ];
  const [indexTeam, setIndexTeam] = useState(0);

  return (
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
        {getCurrentImage(farmTeams, indexTeam, screenWidth > 600 ? 3 : 1).map(
          (team, index) => (
            <li>
              <div className="team-images">
                <img src={team.image} alt={`${team.name}image`} />
                <h4>{team.name}</h4>
                <p>{team.title}</p>
              </div>
            </li>
          )
        )}
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
  );
};

export default TeamFarm;

const getCurrentImage = (arr, index, ecceptedLength) => {
  const result = [];
  for (let i = 0; i < ecceptedLength; i++) {
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
