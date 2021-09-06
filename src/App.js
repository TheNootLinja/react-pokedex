import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import IndividualPokemonModal from './components/IndividualPokemonModal/IndividualPokemonModal';

function App() {
  const [pokeData, setPokeData] = useState(null);
  const [pokeDataArr, setPokeDataArr] = useState(null)
  const [indivPokeData, setIndivPokeData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (name) => {
    setSearchTerm(name);
    fetchIndividualPokemon(name);
    setModalOpen(true);
  }

  const handleCloseClick = () => {
    setModalOpen(false);
    setIndivPokeData(null);
  }

  const fetchIndividualPokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((indivData) => {
      setIndivPokeData(indivData);
      console.log(indivData)
    })
  }

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=898')
    .then((response) => response.json())
    .then((data) => {
      setPokeData(data);
      setPokeDataArr(data);
    });
  };
  useEffect(() => {
    fetchPokemon();
  }, [])

  let num = 0;

  // Function for filtering array of pokemon based on search
  const searchPokemon = (e) => {
    setSearchTerm(e.currentTarget.value);
    setPokeDataArr(pokeData.results.filter(pokemon => pokemon.name.includes(searchTerm)));
  }

  return (
  <div className="App">
    <header className="App__header">
      {!searchOpen ? <h1 className="App__header__h1">React Pokedex</h1> : <input type="text" className="App__header__input" onChange={searchPokemon}/>}
      <span className="App__header__span" onClick={() => console.log(setSearchOpen(!searchOpen))}>{searchOpen ? 'Close' : 'Search'}</span>
      </header>
    <div className="App__grid">
    {pokeDataArr&&pokeDataArr.results.map((pokemon) => {
    num = num + 1
      return (
          <Card clickFunc={handleClick} name={pokemon.name} num={num} key={pokemon.name}/>
          )})}
          </div>
          {modalOpen&&indivPokeData&&<IndividualPokemonModal handleCloseClick={handleCloseClick} indivPokeData={indivPokeData}/>}
  </div>
  )
}

export default App;
