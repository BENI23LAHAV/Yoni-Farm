import React, { useState } from "react";
import Comments from "./Comments";
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
          <p>מאת: {post.authorName}</p>
          <p>תאריך: {post.date}</p>
        </div>
      </div>
      <div className="post-content"></div>
      {sliceStringToArr(post.content).map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      {/* <p>{post.content}</p> */}
      <div className="comments">
        {false && (
          <Comments
            setShowComments={setShowComments}
            showComments={showComments}
          />
        )}
      </div>
    </div>
  );
};

export default Post;

function sliceStringToArr(string) {
  const arr = string.split(/[.,]/);
  // const arr = string.split(/(?<=[.,])/);
  console.log(arr);

  return arr;
}
