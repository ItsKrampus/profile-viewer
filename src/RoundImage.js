import React from 'react';
import './RoundImage.css'; // Import the CSS file for styling

const RoundImage = ({ imageUrl }) => {
    return <img src={imageUrl} alt="Round" className="round-image" />;
};

export default RoundImage;