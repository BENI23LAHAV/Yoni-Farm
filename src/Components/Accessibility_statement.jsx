import React, { useState } from "react";

const AccessibilityStatement = () => {
  const [language, setLanguage] = useState("en"); // שפת ברירת מחדל אנגלית

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "he" : "en"));
  };

  return (
    <div
      className="accessibility_statement"
      style={{ direction: language === "he" ? "rtl" : "ltr" }}>
      <button onClick={toggleLanguage} style={{ marginBottom: "20px" }}>
        {language === "en" ? "עברית" : "English"}
      </button>

      {language === "en" ? (
        <>
          <h1 style={{ textAlign: "center" }}>
            The Chen's Farm Accessibility Statement
          </h1>
          <br />
          <br />
          Updated: December 2024.
          <br />
          <br />
          <h2>General</h2>
          The Chen's Farm strives to ensure that its services are accessible to
          people with disabilities. The Chen's Farm has invested a significant
          amount of resources to help ensure that its website is made easier to
          use and more accessible for people with disabilities, with the strong
          belief that every person has the right to live with dignity, equality,
          comfort and independence.
          <h2>Accessibility on Https://www.chens-farm.co.il</h2>
          Https://www.chens-farm.co.il makes available the{" "}
          <a
            href="https://UserWay.org"
            alt="Free Website Accessibility Widget"
            title="Free Website Accessibility Widget">
            UserWay Website Accessibility Widget
          </a>{" "}
          that is powered by a dedicated accessibility server. The software
          allows Https://www.chens-farm.co.il to improve its compliance with the
          Web Content Accessibility Guidelines (WCAG 2.1).
          <h2>Enabling the Accessibility Menu</h2>
          The Https://www.chens-farm.co.il accessibility menu can be enabled
          either by hitting the tab key when the page first loads or by clicking
          the accessibility menu icon that appears on the corner of the page.
          After triggering the accessibility menu, please wait a moment for the
          accessibility menu to load in its entirety.
          <h2>Disclaimer</h2>
          The Chen's Farm continues its efforts to constantly improve the
          accessibility of its site and services in the belief that it is our
          collective moral obligation to allow seamless, accessible and
          unhindered use also for those of us with disabilities.
          <h2>Contact Us</h2>
          If you wish to report an accessibility issue, have any questions or
          need assistance, please contact The Chen's Farm Customer Support as
          follows:
          <br />
          Email:{" "}
          <a href="mailto:beni0548472300@gmail.com">beni0548472300@gmail.com</a>
          <br />
          Phone: +972 506 864 838
        </>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>הצהרת נגישות של חוות חן</h1>
          <br />
          <br />
          עדכון: דצמבר 2024.
          <br />
          <br />
          <h2>כללי</h2>
          חוות חן שואפת להבטיח שהשירותים שלה יהיו נגישים לאנשים עם מוגבלות.
          החווה השקיעה משאבים רבים כדי להבטיח שהאתר שלה יהיה קל יותר לשימוש
          ונגיש יותר עבור אנשים עם מוגבלות, מתוך אמונה חזקה שלכל אדם יש זכות
          לחיות בכבוד, שוויון, נוחות ועצמאות.
          <h2>נגישות באתר Https://www.chens-farm.co.il</h2>
          אתר Https://www.chens-farm.co.il מספק את{" "}
          <a
            href="https://UserWay.org"
            alt="תוסף נגישות חינמי לאתרי אינטרנט"
            title="תוסף נגישות חינמי לאתרי אינטרנט">
            תוסף הנגישות של UserWay
          </a>{" "}
          המופעל על ידי שרת נגישות ייעודי. התוכנה מאפשרת לאתר
          Https://www.chens-farm.co.il לשפר את התאימות להנחיות נגישות לתוכן
          באינטרנט (WCAG 2.1).
          <h2>הפעלת תפריט הנגישות</h2>
          ניתן להפעיל את תפריט הנגישות באתר Https://www.chens-farm.co.il על ידי
          לחיצה על מקש הטאב כאשר הדף נטען לראשונה, או על ידי לחיצה על סמל תפריט
          הנגישות המופיע בפינת הדף. לאחר הפעלת התפריט, יש להמתין מספר שניות
          לטעינה מלאה של תפריט הנגישות.
          <h2>כתב ויתור</h2>
          חוות חן ממשיכה במאמצים לשפר באופן מתמיד את הנגישות של האתר והשירותים
          מתוך אמונה שזו חובה מוסרית משותפת לאפשר שימוש חלק ונגיש גם עבור אנשים
          עם מוגבלות.
          <h2>צרו קשר</h2>
          אם נתקלתם בקושי עם תוכן כלשהו באתר או זקוקים לסיוע, אנא פנו לשירות
          הלקוחות שלנו:
          <br />
          דוא"ל:{" "}
          <a href="mailto:beni0548472300@gmail.com">beni0548472300@gmail.com</a>
          <br />
          טלפון: +972 506 864 838
        </>
      )}
    </div>
  );
};

export default AccessibilityStatement;
