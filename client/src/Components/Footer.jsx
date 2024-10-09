import React from "react";
const wazeImage = require("../Images/waze.png");
const mapsImage = require("../Images/maps.png");
const phoneImage = require("../Images/phone.png");
const facebookImage = require("../Images/facebook.png");
const gmailImage = require("../Images/gmail.png");
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <ul>
          <li>
            <a href="https://waze.com/ul/hsv8v15b17" target="_blank">
              <img src={wazeImage} alt="wazeImage" />
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/p241Kg24APhSn2978" target="_blank">
              <img src={mapsImage} alt="mapsImage" />
            </a>
          </li>
          <li>
            <a href="tel:+97254123456" target="_blank">
              <img src={phoneImage} alt="phoneImage" />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img src={facebookImage} alt="facebookImage" />
            </a>
          </li>
          <li>
            <a href="mailto:hachva@example.com" target="_blank">
              <img src={gmailImage} alt="gmailImage" />
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="footer-left">
        <ul>
          <li>
            <a href="https://maps.app.goo.gl/p241Kg24APhSn2978" target="_blank">
              <img src={mapsImage} alt="Maps" />{" "}
            </a>
          </li>
          <li>
            <a href="https://waze.com/ul/hsv8v15b17" target="_blank">
              <img src={wazeImage} alt="waze" />
            </a>
          </li>
        </ul>{" "}
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="tel:+97254123456">פלאפון: 054-123456</a>
          </li>
          <li>
            <a
              href="mailto:hachva@example.com"
              target="
            _blank">
              החווה של חן - דוא"ל
            </a>
          </li>
          <li>
            <a
              href="https://m.facebook.com/media/set/?set=a.274432316433054.1073741833.269079946968291&type=3"
              target="_blank">
              החווה של חן - פייסבוק
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-center">מומלץ לתאם מראש.</div> */}
    </div>
  );
};

export default Footer;
