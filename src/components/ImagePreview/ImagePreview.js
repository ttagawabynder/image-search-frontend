import React from 'react';
import './ImagePreview.css';

const ImagePreview = ({imageInfo}) => {
    return (
        <div className="image-preview-container">
            <img className="image-preview" src={imageInfo.url}/>
            <div className="image-preview-details">
                <div>{imageInfo.filename}</div>
                <div>{imageInfo.fileType}</div>
            </div>
        </div>
    );
}

export default ImagePreview;