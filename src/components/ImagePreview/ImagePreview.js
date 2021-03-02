import React from 'react';
import './ImagePreview.css';

const ImagePreview = ({imageInfo}) => {
    const fileType = imageInfo.fileType.toUpperCase().split('/').pop();
    return (
        <div className="image-preview-container">
            <img className="image-preview" src={imageInfo.url}/>
            <div className="image-preview-details">
                <div className="image-preview-filename">{imageInfo.filename}</div>
                <div className="image-preview-detail">{fileType}</div>
            </div>
        </div>
    );
}

export default ImagePreview;