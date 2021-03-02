import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ( {file, setFile, setImageList} ) => {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const onInputChange = ({ target }) => {
        console.log(target.files);
        const file = target.files.length ? target.files[0] : null;
        if (file) {
            const url = URL.createObjectURL(file);
            console.log(file);
            setFile({url, filename: file.name, fileType: file.type, fileSize: file.size})
        } else {
            setFile(null);
        }
    }

    async function stall(stallTime = 1000) {
        await new Promise(resolve => setTimeout(resolve, stallTime));
      }

    const onSearchSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { filename } = file;
        const path = '/Users/ayohannes/Desktop/' + filename;
        const response = await axios.get('http://127.0.0.1:8091/search-image', {
            params: {
                uri: path
            }
        });
        await stall();
        // setImageList({
        //     "/Users/tylertagawa/Sites/image-search/public/images/image_data/person/keanuHappy.png": 1.1404776573181152,
        //     "/Users/tylertagawa/Sites/image-search/public/images/image_data/nina/nina_face.png": 1.154442310333252
        // });
        setImageList(response.data);
        setIsLoading(false);
        history.push('/results');
        // console.log(response);
    }

    return (
        <div>
            {!isLoading && (
                <div className="search-bar-container" style={{backgroundImage: `url("/images/keanuSerious.png")`}}>
                    <img className="search-logo" src="/images/circuit_logo_white_large.svg"/>
                    <div className="search-bar">
                        <form className="ui form" onSubmit={onSearchSubmit}>
                            <div className="search-file-selector">
                                <label id="file-selector-label" for="file-selector">{file ? file.filename : "Search for related images"}</label>
                                <input id="file-selector" style={{display: "None"}}type="file" onChange={onInputChange}/>
                            </div>
                            <input className="search-button" type="image" src="/images/searchButton.png" disabled={!file} onClick={onSearchSubmit}/>
                        </form>
                    </div>
                </div>
            )}
            {isLoading && file && (
                <div className="search-bar-container" style={{backgroundImage: `url("/images/keanuWoah.png")`}}>
                    <div className="loading-bar">
                        Finding similar images to {file.filename}...
                    </div>
                    {/* <img className="loading-image" src={file.url} /> */}
                </div>
            )}
        </div>
    );
}

export default SearchBar;