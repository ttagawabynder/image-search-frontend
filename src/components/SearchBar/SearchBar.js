import React from 'react';
import axios from 'axios';

const SearchBar = ( {file, setFile, setImageList} ) => {
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

    const onSearchSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setImageList(response.data.slice(0, 30));
        console.log(response);
    }

    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onSearchSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type="file" onChange={onInputChange}/>
                </div>
                <button className={`ui button ${file ? '' : 'disabled'}`} type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;