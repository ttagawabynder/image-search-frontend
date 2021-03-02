import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import "./ResultSection.css";
// import "keanuHappy" from "../../images/keanuHappy.png";

const ResultSection = ({accentColor, accentColorLight, boxShadow, heading, headingImage, results}) => {
    console.log('results', results);
    return (
        <div className="result-section-container">
            <div className="result-section-heading-container">
                <img className="result-section-heading-image" style={{color: accentColor}} src={headingImage}/>
                <span className="result-section-heading">{heading} <span className="result-section-heading-count">({results.length})</span></span>
                <div className="result-section-divider" style={{borderColor: accentColorLight}}></div>
            </div>
            <div className="ui cards" >
                {
                    results.map((image, idx) => (
                        <ImageCard boxShadow={boxShadow} accentColor={accentColor} imageUrl={image.src} filename={image.filename} score={image.score} key={idx}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ResultSection;