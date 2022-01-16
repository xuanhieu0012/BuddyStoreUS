import React from 'react';

function SearchBar({setSearchWord}){


function handlesearch(e){
    setSearchWord(e.target.value)

  }

    return  <div className="searchbar">
    <label htmlFor="search" id="aboveSearchBar"></label>
        <input
        type="text"
        id="search"
        placeholder="Search for Product..."
        onChange={handlesearch}
        />
    </div>
}


export default SearchBar;