import React, { useState } from "react";
const Post = (props) => {
  const { post, index } = props;
  const [showComments, setShowComments] = useState(false);
  return (
    <div key={index} className="post">
      <h3>{post.title}</h3>
      <div className="post-author">
        <img
          src={post.authorImage}
          alt={post.authorName}
          className="circle-image"
        />
        <div className="author-details">
          <span>מאת: {post.authorName || "אורח"}</span>
          <br />
          <span>{post.farmTitle || ""}</span>
          <br />
          <span>תאריך: {post.date}</span>
        </div>
      </div>
      <div className="post-content">
        {sliceStringToArr(post.content).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      {/* <p>{post.content}</p> */}
    </div>
  );
};
//some commit
export default Post;

function sliceStringToArr(string) {
  // const arr = string.split(/[.,]/);
  const arr = string.split(/(?<=[.,])/);
  // console.log(arr);

  return arr;
}
