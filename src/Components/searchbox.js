/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
function Searchbox(props) {

    let [searchValue, setSearchValue] = useState("");
    const inputHandler = (event) => {
        setSearchValue(event);
    }
    return (
        <div className="search">
            <div className="search-box-autocomplete">
                <div className="searchInput">
                    <input type="text" onKeyUp={(event) => inputHandler(event.target.value)} placeholder="Search game title" />
                </div>
            </div>
            <div className="searchIcon">
                <button onClick={() => props.searchInputHandler(searchValue)}>Search</button>
            </div>
        </div>
    );

}

export default Searchbox;