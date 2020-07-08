import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header/Header';
import Pokelist from './components/Pokelist/Pokelist';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [pokedata, setPokeData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [prevPageUrl, setPrevPageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = null;
    setLoading(true);

    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c )
    })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        // setPokeData(res.data.results.map(pokemon => ({ name: pokemon.name, url: pokemon.url }) ));
        let _pokeList = res.data.results.map(pokemon => ({ name: pokemon.name, url: pokemon.url }));
        let _pokemonData = _pokeList.map(pokeListItem => {
          let pokemon = {}
          axios.get(pokeListItem.url)
            .then(res => {
              pokemon = {
                id: res.data.id,
                name: res.data.name,
              }
              return pokemon;
            });
            return pokemon;
        });

        console.log(_pokemonData);
      });

      return () => cancel();

  },[currentPageUrl]);

  console.log(pokedata);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPreviousPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <>
      <Header />
        { loading && <h2>Carregando itens...</h2> }
      
      <Pokelist pokedata = { pokedata } />

      <Pagination
        goToNextPage = { nextPageUrl ? goToNextPage : null }
        goToPreviousPage = { prevPageUrl ? goToPreviousPage : null }
      />

      <Footer />
    </>
  );
}

export default App;
