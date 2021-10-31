import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]); // Set initial state to be empty
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setprevUrl] = useState("");
  const [loading, setLoading] = useState(true); // Loading will be set to false when data is loaded

  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
    }
  }, []); //  empty array means loading will only happen once

  return (
    <div className='container'>
      <Navbar />
    </div>
  );
};

export default App;
