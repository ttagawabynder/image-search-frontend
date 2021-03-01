import React, {useState} from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';


const App = () => {
    const [file, setFile] = useState();
    const [imageList, setImageList] = useState([]);
    return (
        <div className="ui" style={{margin: '10px 30px 30px 10px'}}>
            <SearchBar file={file} setFile={setFile} setImageList={setImageList}/>
            {imageList.length > 0 && <SearchResults images={imageList} file={file}/>}
        </div>
    );
}

export default App;