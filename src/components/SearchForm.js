import React, { useState } from "react";
import CharacterList from './CharacterList'
export default function SearchForm({passData}) {
  const [name, setName] = useState("");


  const characters = {passData}
  console.log(characters)
  const handleSubmit = event => {
    event.preventDefault();
    
  };

  return (
    <section className="search-form">
      <form onSubmit ={event=> handleSubmit(event)}>
        <label>
          Search for a character
          <input type="text"></input>
        </label>
      </form>
    </section>
  );
}
