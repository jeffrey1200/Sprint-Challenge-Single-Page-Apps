import React from "react";
import {Link} from 'react-router-dom'
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Link to ='/'>
        <p className ='character-list'style ={{fontSize: '30px'}}>Home</p>
        </Link>
        <h1>Welcome to the ultimate fan site!</h1>
        
      </header>
    </section>
  );
}
