import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header/Header';
import Pokelist from './components/Pokelist/Pokelist';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
import ShoppintCart from './components/ShoppingCart/ShoppingCart';

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
        res.data.results.map(pokemon => 
        {
          axios.get(pokemon.url)
            .then(res => {
              pokedata.push({
                id: res.data.id,
                name: res.data.name,
                image: res.data.sprites.front_default,
                types: res.data.types,
                price: Math.floor(Math.random() * 1000) + 1
              });
              setPokeData([...pokedata]);
            });
        });
      });

      return () => cancel();

  },[currentPageUrl]);

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

      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Pokelist pokedata = { pokedata } />

            <Pagination
              goToNextPage = { nextPageUrl ? goToNextPage : null }
              goToPreviousPage = { prevPageUrl ? goToPreviousPage : null }
            />
          </div>
          <div className="col-md-3">
            <ShoppintCart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
