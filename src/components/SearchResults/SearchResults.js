import React from 'react';
import ImagePreview from '../ImagePreview/ImagePreview';
import ResultSection from '../ResultSection/ResultSection';
import { Link } from 'react-router-dom'
import "./SearchResults.css";

const SearchResults = ({images, file}) => {
    console.log("in search results");
    console.log('images', images);
    if (!file || !images || !Object.entries(images).length > 0) {
        return null;
    }

    const exactResults = []
    const goodResults = [];
    const okResults = [];

    // for (const [path, score] of Object.entries(images)) {
    //     const pathPieces = path.split('/');
    //     console.log('path pieces', pathPieces);
    //     const newPath = `/images/image_data/${pathPieces[pathPieces.length-2]}/${pathPieces[pathPieces.length-1]}`;
    //     const fileData = {src: newPath, filename: pathPieces[pathPieces.length-1], score: score.toFixed(2)};
    //     if (path == "/Users/tylertagawa/Sites/image-search/public/images/image_data/nina/nina_face.png") {
    //         for (let i = 0; i<10; i++) {
    //             // goodResults.push(fileData)
    //             exactResults.push(fileData);
    //         }
    //     } else {
    //         for (let i = 0; i<10; i++) {
    //             okResults.push(fileData)
    //         }
    //     }
    // }

    for (const [path, score] of Object.entries(images)) {
        const pathPieces = path.split('/');
        const newPath = `/images/image_data/${pathPieces[pathPieces.length-2]}/${pathPieces[pathPieces.length-1]}`;
        const fileData = {src: newPath, filename: pathPieces[pathPieces.length-1], score: score.toFixed(2)};
        if (score < 0.1) {
            exactResults.push(fileData);
        } else if (score < 1) {
            goodResults.push(fileData);
        } else {
            okResults.push(fileData);
        }
    }

    console.log("good results", goodResults);
    console.log("ok results", okResults);

    return (
        <div className="search-results">
            <div className="search-header">
                <img src="/images/circuit_logo_grey_small.svg" />
                <span className="search-header-text">MATRIX CLONE-SPOTTER</span>
            </div>
            <div className="back-button"><Link to="/">&#60; Back to image upload</Link></div>
            <div className="search-results-section">
                <div className="heading">UPLOADED IMAGE</div>
                <ImagePreview imageInfo={file}/>
            </div>
            <div className="search-results-section">
                <div className="heading">RELATED IMAGE RESULTS ({Object.entries(images).length})</div>
                {exactResults.length > 0 && <ResultSection 
                    results={exactResults}
                    heading="Neo has spotted the clones"
                    headingImage="/images/keanuHappy.png"
                    accentColor="#C538F6"
                    accentColorLight="rgba(197, 56, 246, 0.2)"
                    boxShadow="0px 0px 1px #C538F7, 0px 8px 12px -2px rgba(197, 56, 247, 0.44)"
                />}
                {goodResults.length > 0 && <ResultSection 
                    results={goodResults}
                    heading="Neo approved = Very similar"
                    headingImage="/images/keanuOk.png" 
                    accentColor="#13A9D4" 
                    accentColorLight="rgba(33, 166, 204, 0.44)"
                    boxShadow="0px 0px 1px #21A6CC, 0px 8px 12px -2px rgba(33, 166, 204, 0.44)"
                />}
                {okResults.length > 0 && <ResultSection 
                    results={okResults}
                    heading="Neo okay’d = somewhat similar"
                    headingImage="/images/keanuUhhh.png" 
                    accentColor="#6056BA" 
                    accentColorLight="rgba(96, 86, 186, 0.44);"
                    boxShadow="0px 0px 1px #6056BA, 0px 8px 12px -2px rgba(96, 86, 186, 0.44)"
                />}
            </div>
        </div>
    );
}

export default SearchResults;