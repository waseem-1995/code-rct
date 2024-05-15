import React from "react";
import "./CSS Files/PerPost.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const PerPost = ({title, liked, id, handleToggle}) => {
const handleClick = () => {
  handleToggle(id,liked)
}
  return (
    <div className="perPostWrapper" data-testid='perPostWrapper'>
      <div className="perPostCard">
        <img src="https://via.placeholder.com/50/3a9f5" alt="profile" />
        <div className="postTitle">{title}</div>
      </div>
      <div data-testid='likePostDiv' className="likedIcons" onClick={handleClick}>
        {/* Render the icons based on the liked condition */}
        {liked ? <FcLike data-testid='likedIcon'/> : <AiOutlineHeart data-testid='notLikedIcon' />}
         
        
      </div>
    </div>
  );
};

export default PerPost;
