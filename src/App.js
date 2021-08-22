import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card/Card';

function App() {
  const [pokeData, setPokeData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (name) => {
    setSearchTerm(name);
    console.log(searchTerm);
  }

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=898')
    .then((response) => response.json())
    .then((data) => {
      setPokeData(data);
      // console.table(pokeData.results)
    });
  };
  useEffect(() => {
    fetchPokemon();
  }, [])

  let num = 0;


  return (
  <div className="App">
    <header className="App__header"></header>
    <div className="App__grid">
    {pokeData&&pokeData.results.map((pokemon) => {
    num = num + 1
      return (
          <Card clickFunc={handleClick} name={pokemon.name} num={num} key={pokemon.name}/>
          // <div>
          //   <p>{pokemon.name}</p>
          //   <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`} alt="" />
          // </div>
          )})}
          </div>
  </div>
  )
}

export default App;
