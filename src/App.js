import React from "react";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard'
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";
import Characters from "./components/Characters.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main className = 'character-list'>
      <SearchForm/>
      <Route exact path = '/'>
      <Header />
       </Route>
       <Route exact path = '/'>
         
         <CharacterList/>
       </Route>
       <Route path = '/characters/:charID'>
         <WelcomePage/>
         <Characters/>

         </Route>
      
     
    </main>
  );
}
