import React from 'react';
import ImagePreview from '../ImagePreview/ImagePreview';
import ResultSection from '../ResultSection/ResultSection';
import { Link } from 'react-router-dom'
import "./SearchResults.css";

const SearchResults = ({images, file}) => {
    if (!file || !images || !images.length > 0) {
        return null;
    }
    const goodResults = images.slice(0, 15);
    const okResults = images.slice(15, 30);

    return (
        <div className="search-results">
            <div className="back-button"><Link to="/">&#60; Back to image upload</Link></div>
            <div className="search-results-section">
                <div className="heading">UPLOADED IMAGE</div>
                <ImagePreview imageInfo={file}/>
            </div>
            <div className="search-results-section">
                <div className="heading">RELATED IMAGE RESULTS ({images.length})</div>
                <ResultSection 
                    results={goodResults}
                    heading="Keanu approved = Very similar"
                    headingImage="/images/keanuHappy.png"
                    accentColor="#C538F6"
                    accentColorLight="rgba(197, 56, 246, 0.2)"
                    boxShadow="0px 0px 1px #C538F7, 0px 8px 12px -2px rgba(197, 56, 247, 0.44)"
                />
                <ResultSection 
                    results={okResults}
                    heading="Keanu okay’d = Somewhat similar"
                    headingImage="/images/keanuOk.png" 
                    accentColor="#13A9D4" 
                    accentColorLight="rgba(33, 166, 204, 0.44)"
                    boxShadow="0px 0px 1px #21A6CC, 0px 8px 12px -2px rgba(33, 166, 204, 0.44)"
                />
            </div>
        </div>
    );
}

export default SearchResults;