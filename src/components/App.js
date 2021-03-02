import React, {useState} from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    const [file, setFile] = useState();
    const [imageList, setImageList] = useState({});
    return (
        <div className="ui">
            <BrowserRouter>
                <Route path="/" exact>
                    <SearchBar file={file} setFile={setFile} setImageList={setImageList}/>
                </Route>
                <Route path="/results" exact>
                    <SearchResults images={imageList} file={file}/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;