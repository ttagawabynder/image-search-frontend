import React from 'react';
import ImagePreview from '../ImagePreview/ImagePreview';
import ResultSection from '../ResultSection/ResultSection';
import "./SearchResults.css";

const SearchResults = ({images, file}) => {
    if (!file) {
        return null;
    }
    return (
        <div className="search-results">
            <div className="search-results-section">
                <div className="heading">UPLOADED IMAGE</div>
                <ImagePreview imageInfo={file}/>
            </div>
            <div className="search-results-section">
                <div className="heading">RELATED IMAGE RESULTS</div>
                {/* <div className="ui cards" >
                    {
                        images.map((image, idx) => (
                            <ImageCard imageUrl={image.url} filename="test" score="99" key={idx}/>
                        ))
                    }
                </div> */}
                <ResultSection results={images} heading="Keanu approved = Very similar" accentColor="blue" />
            </div>
        </div>
    );
}

export default SearchResults;