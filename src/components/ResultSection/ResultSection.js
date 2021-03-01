import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import "./ResultSection.css";

const ResultSection = ({accentColor, heading, results}) => {
    return (
        <div>
            <div className="result-section-container">
                <span className="result-section-heading">{heading} <span className="result-section-heading-count">({results.length})</span></span>
                <div className="result-section-divider"></div>
            </div>
            <div className="ui cards" >
                {
                    results.map((image, idx) => (
                        <ImageCard imageUrl={image.url} filename="test" score="99" key={idx}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ResultSection;