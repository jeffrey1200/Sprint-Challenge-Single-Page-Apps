import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const [char, setChar] = useState([]);

  const { charID } = useParams();

  useEffect(() => {
    const id = charID;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
      setChar(res.data);
    });
  }, []);

  return (
    <div>
      <CharacterCard key={char.id} characters={char} />
    </div>
  );
};
export default Characters;
