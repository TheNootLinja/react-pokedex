import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card/Card';

function App() {
  const [pokeData, setPokeData] = useState(null);
  const [indivPokeData, setIndivPokeData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
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
    });
  };
  useEffect(() => {
    fetchPokemon();
  }, [])

  let num = 0;


  return (
  <div className="App">
    <header className="App__header">{`https://pokeapi.co/api/v2/pokemon/${searchTerm}`}</header>
    <div className="App__grid">
    {pokeData&&pokeData.results.map((pokemon) => {
    num = num + 1
      return (
          <Card clickFunc={handleClick} name={pokemon.name} num={num} key={pokemon.name}/>
          )})}
          </div>
          {modalOpen&&indivPokeData&&<modal>
            <div className="App__modalbg">
              <div className="App__modal">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indivPokeData.id}.png`} alt="" />
                <h2>{indivPokeData.forms[0].name}</h2>
                <button onClick={handleCloseClick}>Close</button>
              </div>
            </div>
          </modal>}
  </div>
  )
}

export default App;
