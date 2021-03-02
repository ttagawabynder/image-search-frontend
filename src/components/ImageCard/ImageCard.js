import React from 'react';
import './ImageCard.css';


const ImageCard = ({imageUrl, filename, score, boxShadow, accentColor}) => {
    return (
        <div className="card" style={{width: "200px", boxShadow: boxShadow}}>
            <div className="image-score" style={{backgroundColor: accentColor}}>
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