import React,{useState} from 'react';

function SearchBar(){
const [search, setSearch] = useState("")

function handleSearchSubmit(){

}

    return <div className="inputSearch">
    <form onSubmit={handleSearchSubmit}>
        
        <input className="searchBar" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Products" />
        <input type="submit"  className="search-button" value="Search" />
    </form>
</div>
}


export default SearchBar;