import React, { useState, useRef } from "react";

const Comments = (props) => {
  const writerRef = useRef();
  const commentRef = useRef();
  const {
    showComments,
    setShowComments,
    comments = ["im comment number 1", "im comment number 2"],
  } = props;
  const [comment, setComment] = useState([]);
  return (
    <div>
      <hr></hr>

      <h3 onClick={() => setShowComments((prev) => !prev)}>תגובות</h3>
      {showComments && (
        <>
          <ul>
            {comments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <input
            type="text"
            ref={writerRef}
            placeholder="שם המגיב(מתפרסם)"
            required
          />
          <br></br>
          <textarea
            name=""
            id=""
            ref={commentRef}
            placeholder="תוכן התגובה"
            required></textarea>
          <br></br>

          <button onClick={() => {}}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Comments;
