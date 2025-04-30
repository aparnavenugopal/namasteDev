import React, { useState } from 'react';
import './styles.css'; 
function LikeButton() 
{
    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);

    const classNames = `like-button
      ${hover ? 'hovered' : ''}
      ${clicked ? 'clicked' : ''} `;
    return (
        <button
            className={classNames}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick ={() => setClicked(!clicked)}
        >
            <span className="heart">{clicked ? '🤍' : '❤️'}</span>Like
        </button>
    );
}

export default LikeButton;