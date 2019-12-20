import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);


  const passData = props.char

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      // console.log(res.data.results);
      setChar(res.data.results);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {char.map(items => (
        <CharacterCard key={items.id} characters={items} />
      ))}
    </section>
  );
}
