import React, { useState } from "react";
const rightArrow = require("../Images/right-arrow.png");
const leftArrow = require("../Images/left-arrow.png");
const Info = () => {
  const [indexEmbded, setIndexEmbded] = useState(0);
  const [embdedVideos, setEmbdedVideos] = useState([
    "https://www.youtube.com/embed/y893yE4TudA",
    "https://www.youtube.com/embed/y893yE4TudA",
    "https://www.youtube.com/embed/y893yE4TudA",
    "https://www.youtube.com/embed/FvCuon94haA",
    "https://www.youtube.com/embed/FvCuon94haA",
    "https://www.youtube.com/embed/FvCuon94haA",
  ]);
  return (
    <div className="info-container">
      <div className="overlay"></div>
      <div className="info">
        <h2>קצת עלינו</h2>
        <div className="some-words">
          <p>
            חוות הסוסים שלנו ממוקמת באיזור פסטורלי ושקט, ומציעה חוויה ייחודית
            לכל המבקרים. <br />
            בחווה ישנם סוסים מגזעים שונים, אותם ניתן לרכב וללטף, והצוות שלנו
            יעמוד לשירותכם בכל שאלה ובקשה. <br />
            בנוסף, בחוות הסוסים קיימת פינת חי מקסימה, בה תוכלו לפגוש מגוון בעלי
            חיים כמו ארנבים, עיזים, וכמה עופות צבעוניים. <br />
            המקום מתאים במיוחד למשפחות עם ילדים, והוא מציע פעילות מהנה ומעשירה
            לכל הגילאים. <br />
            אנו מציעים גם אפשרות להשכיר את המקום לאירועים פרטיים כמו ימי הולדת,
            בריתות וחגיגות שונות. <br />
            האירועים יכולים לכלול פעילות עם סוסים, סדנאות יצירה, וכמובן פינת חי.{" "}
            <br />
            אנו נשמח לארח אתכם ולהפוך את האירוע שלכם לייחודי ומיוחד!
          </p>
        </div>
        <div className="contact-info">
          <ul>
            <li>
              <a href="tel:+97254123456">פלאפון: 054-123456</a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/p241Kg24APhSn2978"
                target="_blank">
                כתובת: סמוך ליילו, כביש 411, מזכרת בתיה
              </a>
            </li>

            <li>
              <a href="">hachava@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="embded-vidoes">
          <ul>
            <li
              onClick={() => {
                handlePrev(setIndexEmbded);
              }}>
              <img src={leftArrow} alt="" />
            </li>

            {getCurrentVideos(embdedVideos, indexEmbded).map((video, index) => (
              <li>
                <iframe
                  key={index}
                  width="853"
                  height="480"
                  src={video}
                  title={`אורווה חוות סוסים לילדים בעברית 🐴 סוס בעלי חיים לילדים 🐎 סוסים דוהרים בטבע 🏇`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen></iframe>
              </li>
            ))}
            <li
              onClick={() => {
                handleNext(setIndexEmbded);
              }}>
              <img src={rightArrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;

const getCurrentVideos = (embdedVideos, indexEmbded) => {
  const result = [];
  for (let i = 0; i < 3; i++) {
    const currentIndex = (Math.abs(indexEmbded) + i) % embdedVideos.length;
    result.push(embdedVideos[currentIndex]);
  }
  return result;
};
const handleNext = (setIndexEmbded) => {
  setIndexEmbded((prev) => prev + 1);
};
const handlePrev = (setIndexEmbded) => {
  setIndexEmbded((prev) => prev - 1);
};
