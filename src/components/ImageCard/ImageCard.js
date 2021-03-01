import React from 'react';
import './ImageCard.css';


const ImageCard = ({imageUrl, filename, score}) => {
    return (
        <div className="card">
            <div className="image-score">
                {score}
            </div>
            <div className="image">
                <img src={imageUrl} />
            </div>
            <div className="content">
                <a className="header">{filename}</a>
            </div>
        </div>
    );
}

export default ImageCard;