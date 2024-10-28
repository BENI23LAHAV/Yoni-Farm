import React, { useState, useEffect } from "react";
import {
  farmTeams,
  getCurrentElements as getCurrentImage,
  handleNext,
  handlePrev,
} from "../Components/Sourses";
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

  const [indexTeam, setIndexTeam] = useState(0);

  return (
    <div className="farm-team">
      <h2>צוות החווה</h2>
      <ul>
        <li>
          <img
            className="arrow-img"
            src={rightArrow}
            alt="right arrow"
            style={{ cursor: "pointer" }}
            onClick={() => handleNext(setIndexTeam)}
          />
        </li>
        {getCurrentImage(
          farmTeams,
          indexTeam,
          screenWidth > 1000 ? 3 : screenWidth > 800 ? 2 : 1
        ).map((team, index) => (
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
            src={leftArrow}
            alt="left arrow"
            style={{ cursor: "pointer" }}
            onClick={() => handlePrev(setIndexTeam)}
          />
        </li>
      </ul>
    </div>
  );
};

export default TeamFarm;

// const getCurrentImage = (arr, index, ecceptedLength) => {
//   const result = [];
//   for (let i = 0; i < ecceptedLength; i++) {
//     const currentIndex = (Math.abs(index) + i) % arr.length;
//     result.push(arr[currentIndex]);
//   }
//   return result;
// };
// const handleNext = (setIndex) => {
//   setIndex((prev) => prev + 1);
// };
// const handlePrev = (setIndex) => {
//   setIndex((prev) => prev - 1);
// };
