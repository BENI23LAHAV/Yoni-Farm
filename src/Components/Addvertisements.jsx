import React, { useEffect, useState, useCallback } from "react";
import { addvertisementImages } from "./Sourses";

// Helper: בדיקת תאריך
function isInDateRange(fromDate, toDate) {
  const now = new Date();
  if (fromDate && new Date(fromDate) > now) return false;
  if (toDate && new Date(toDate) < now) return false;
  return true;
}

const STORAGE_KEY = "ad_last_index";
const SESSION_KEY = "ad_shown_this_session";

const Addvertisements = () => {
  const [showAd, setShowAd] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(null);

  // מציאת הפרסומת הבאה להצגה לפי תאריך ולפי localStorage
  const getNextAdIndex = useCallback(() => {
    let lastIndex = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    let idx = lastIndex;
    for (let i = 0; i < addvertisementImages.length; i++) {
      const ad = addvertisementImages[idx % addvertisementImages.length];
      if (isInDateRange(ad.fromDate, ad.toDate)) {
        return idx % addvertisementImages.length;
      }
      idx++;
    }
    return null;
  }, []);

  useEffect(() => {
    // בדוק אם כבר הוצגה פרסומת בסשן הזה
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const nextAdIdx = getNextAdIndex();
    if (nextAdIdx === null) return;

    setCurrentAd(addvertisementImages[nextAdIdx]);
    setCurrentIdx(nextAdIdx);
    setShowAd(true);
  }, [getNextAdIndex]);

  // סגירת הפרסומת
  const closeAd = () => {
    setShowAd(false);
    sessionStorage.setItem(SESSION_KEY, "1");
    // שמור את האינדקס הבא ב-localStorage
    if (currentIdx !== null) {
      localStorage.setItem(
        STORAGE_KEY,
        (currentIdx + 1) % addvertisementImages.length
      );
    }
  };

  // סגירה בלחיצה על מקש
  useEffect(() => {
    if (!showAd) return;
    const handleKeyDown = () => closeAd();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showAd, closeAd]);

  if (!showAd || !currentAd) return null;

  return (
    <div className="galery">
      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2001,
        }}>
        <button
          style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            fontSize: "2rem",
            background: "transparent",
            color: "white",
            border: "none",
            cursor: "pointer",
            zIndex: 2100,
          }}
          aria-label="סגור פרסומת"
          onClick={closeAd}>
          ×
        </button>
        <img
          src={currentAd.url}
          alt={currentAd.alt}
          style={
            window.innerWidth <= 600
              ? { height: "70vh", zIndex: 2000 }
              : {
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  borderRadius: "10px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
                  margin: "auto",
                  display: "block",
                  zIndex: 2000,
                }
          }
        />
      </div>
    </div>
  );
};

export default Addvertisements;
