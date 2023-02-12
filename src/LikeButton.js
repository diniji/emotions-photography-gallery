import React, { useState } from 'react';
import heart1 from "./Photos/heart1.png";
import heart2 from "./Photos/heart2.png";

const LikeButton = () => {
  const [likes, setLikes] = useState(187);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div className="likesStyle">
      <button className="likesStyle" onClick={ handleClick }
        {... `like-button ${isClicked && 'liked'}` }>
        <span className="likes-counter">{ `Like | ${likes}` }</span>
        <span><img src={isClicked ? heart2 : heart1} className="likes-counter" width="20px" alt="heart" /></span>
      </button>
    </div>
  );
};

export default LikeButton;