import React from "react";
const wazeImage = require("../Images/waze.png");
const mapsImage = require("../Images/maps.png");
const phoneImage = require("../Images/phone.png");
const whatsappImage = require("../Images/whatsapp-icon.png");
const facebookImage = require("../Images/facebook.png");
const gmailImage = require("../Images/gmail.png");
const instagramImage = require("../Images/instegram.png");
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <ul>
          <li>
            <a
              href="https://www.waze.com/he/live-map/directions?to=ll.31.83852249%2C34.84880877"
              target="_blank"
              rel="noreferrer">
              <img
                src={wazeImage}
                alt="waze Image"
                title="Waze Logo icon by Icons8"
              />
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/p241Kg24APhSn2978"
              target="_blank"
              rel="noreferrer">
              <img
                src={mapsImage}
                alt="maps Image"
                title="Maps Logo icon by Icons8"
              />
            </a>
          </li>
          <li>
            <a href="tel:+972545459614" target="_blank" rel="noreferrer">
              <img
                src={phoneImage}
                alt="phone Image"
                title="Phone Logo icon by Icons8"
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+972545459614"
              target="_blank"
              rel="noreferrer">
              <img
                src={whatsappImage}
                alt="whatsapp Image"
                title="Whatsapp Logo icon by Icons8"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/people/%D7%94%D7%97%D7%95%D7%95%D7%94-%D7%A9%D7%9C-%D7%97%D7%9F/61568537592902/"
              target="_blank"
              rel="noreferrer">
              <img
                src={facebookImage}
                alt="facebook Image"
                title="facebook Logo icon by Icons8"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/hachava.shel.chen/?target_user_id=9061701089&ndid=62e5c21563aaeH21c1e95e1H62e5c6aec3d80H31&utm_source=instagram&utm_medium=email&utm_campaign=follower_activity_email&__bp=1"
              target="_blank"
              rel="noreferrer">
              <img
                src={instagramImage}
                alt="instagram Image"
                title="Instagram Logo icon by Icons8"
              />
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer-text">
        <div className="footer-details-left">
          <ul>
            <li>כתובתינו: כביש 411 סמוך ליילו מזכרת בתיה,ישראל </li>
            <li>
              פלאפון:
              <a
                href="tel:+972545459614"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white", textDecoration: "none" }}>
                {" "}
                0545459614
              </a>
            </li>
            <li>
              מייל:
              <a
                href="mailto:x0527639398@gmail.com"
                style={{ color: "white", textDecoration: "none" }}>
                {" "}
                x0527639398@gmail.com
              </a>
            </li>
            <li>נשמח לראותכם בשעות הפעילות</li>
          </ul>
        </div>
        <div className="footer-copyright-right">
          <p>© 2024. כל הזכויות שמורות.</p>
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
