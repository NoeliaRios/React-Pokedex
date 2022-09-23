import { searchPokemon } from "../../services/searchPokemon";
import React, { useState, useEffect } from "react";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
import "./style.scss";
import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from "@material-ui/icons/Search";



function SearchBar() {
        const [search, setSearch] = useState("initialState");
        const [pokemon, setPokemon] = useState();

        const onChange = (e) => {
          setSearch(e.target.value);
          
        };

        // const onClick = async (e) => {
        //     const data = await searchPokemon(search);
        //   setPokemon(data)
        // }
    
  return (
    <>
      <div container className="search-wrapper">
        <div>
          <input placeholder="Search by name..." onChange={onChange} />
        </div>
        <div className="search-logo">
          <Link to={`/${search}`}>
            <button><SearchIcon/></button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
