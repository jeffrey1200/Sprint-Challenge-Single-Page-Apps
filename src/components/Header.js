import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to = '/search'>
        
      <h2>Looking for a specific character?</h2>
      </Link>
    </header>
  );
}
