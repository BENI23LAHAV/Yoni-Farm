import React from "react";
import Post from "./Post";

import { postsData } from "../Components/Sourses";

const Posts = () => {
  return (
    <div className="posts">
      {postsData.map((post, index) => (
        <Post index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
// function sliceStringToArr(string) {
//   const arr = string.split(/[.,]/);
//   // const arr = string.split(/(?<=[.,])/);
//   console.log(arr);

//   return arr;
// }

// {/* <div key={index} className="post">
//           <h3>{post.title}</h3>
//           <div className="post-author">
//             <img
//               src={post.authorImage}
//               alt={post.authorName}
//               className="circle-image"
//             />
//             <div className="author-details">
//               <p>מאת: {post.authorName}</p>
//               <p>תאריך: {post.date}</p>
//             </div>
//           </div>
//           <div className="post-content"></div>
//           {sliceStringToArr(post.content).map((item, index) => (
//             <p key={index}>{item}</p>
//           ))}
//           {/* <p>{post.content}</p> */}
//           <div className="comments">
//             {/* <Comments /> */}
//           </div>
//         </div> */}
