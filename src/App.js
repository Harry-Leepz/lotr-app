import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./components/data/Pokemon";
import Navbar from "./components/layout/Navbar";
import Card from "./components/layout/Card";
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
      setNextUrl(response.next); // data from fetch request
      setprevUrl(response.previous); // data from fetch request
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []); //  empty array means loading will only happen once

  // Get individual pokemon records from an array off the API
  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  return (
    <div className='container'>
      <Navbar />
      {loading ? (
        <h1>Loading...</h1> // if loading is True else False
      ) : (
        <>
          <div className='grid-container'>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
