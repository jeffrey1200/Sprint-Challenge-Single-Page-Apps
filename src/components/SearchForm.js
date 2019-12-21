import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import { Link } from "react-router-dom";
export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        console.log(res.data.results);
        let characters = res.data.results.filter(char =>
          char.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(characters);
        console.log(results);
      })
      .catch(err => console.log(err));
  }, [search]);

  return (
    <div>
      <Link to = '/'>
      <h1>Home</h1>
      </Link>

      <form>
        <label htmlFor="search">
          Search
          <br />
        </label>
        <input
          className="searchBar"
          name="search"
          type="text"
          id="search"
          placeholder="enter character name"
          value={search}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
      <div>

        {results.map(result => 
        <div>
          
          
          <img alt="Rick&Morty pictures" src={result.image}></img>
          <h1>Name: {result.name}</h1>
          <h2>Gender: {result.gender}</h2>
          <h3>Specie: {result.species}</h3>
          <h4>Status: {result.status}</h4>
          
          </div>
        )}
      </div>
    </div>
  );
}
