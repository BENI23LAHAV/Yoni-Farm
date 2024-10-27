import React from "react";
const wazeImage = require("../Images/waze.png");
const mapsImage = require("../Images/maps.png");
const phoneImage = require("../Images/phone.png");
const whatsappImage = require("../Images/whatsapp-icon.png");
const facebookImage = require("../Images/facebook.png");
const gmailImage = require("../Images/gmail.png");
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <ul>
          <li>
            <a
              href="https://waze.com/ul/hsv8v15b17"
              target="_blank"
              rel="noreferrer">
              <img src={wazeImage} alt="waze Image" />
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/p241Kg24APhSn2978"
              target="_blank"
              rel="noreferrer">
              <img src={mapsImage} alt="maps Image" />
            </a>
          </li>
          <li>
            <a href="tel:+97254123456" target="_blank" rel="noreferrer">
              <img src={phoneImage} alt="phone Image" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+97254123456"
              target="_blank"
              rel="noreferrer">
              <img src={whatsappImage} alt="whatsapp Image" />
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <img src={facebookImage} alt="facebook Image" />
            </a>
          </li>
          <li>
            <a
              href="mailto:hachva@example.com"
              target="_blank"
              rel="noreferrer">
              <img src={gmailImage} alt="gmail Image" />
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-text">
        <div className="footer-details-left">
          <ul>
            <li>כתובתינו: כביש 411 סמוך ליילו מזכרת בתיה,ישראל </li>
            <li>פלאפון: 0527639398</li>
            <li>נשמח לראותכם בשעות הפעילות</li>
          </ul>
        </div>
        <div className="footer-copyright-right">
          <p>© 2024.  כל הזכויות שמורות.</p>
          <p>Created & Desigend by: Beni Lahav</p>
          <a
            href="mailto:beni0548472300@gmail.com"
            target="_blank"
            rel="noreferrer">
            beni0548472300@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
