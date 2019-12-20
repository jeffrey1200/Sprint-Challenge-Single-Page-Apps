import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CharacterCard({ characters }) {
  const { name, gender, image, species, status, id } = characters;

  return (
    <div className = 'character-list'>
      
      <Link to = {`/characters/${characters.id}`}>
      <img alt="Rick&Morty pictures" src={image}></img>
      <h1>Name: {name}</h1>
      <h2>Gender: {gender}</h2>
      <h3>Specie: {species}</h3>
      <h4>Status: {status}</h4>
      </Link>
    </div>
  );
}
