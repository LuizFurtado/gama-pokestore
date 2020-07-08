import React from 'react'

export default function Pokelist({ pokedata }) {
  return (
    <section className="container">
      <div className="row">
        {
          pokedata.map((pokemon, index) => (
            // <div key={ `${pokemon.name}-${index}` }>
            //   { pokemon.name } - { pokemon.id } - { pokemon.price }
            // </div>
            <div className="card" key={ `${pokemon.name }-${ index }` } style={{width: 18 + 'rem'}}>
              <img src={ pokemon.image } className="card-img-top" alt="Imagem do pokemon { pokemon.name }" />
              <div className="card-body">
                <h5 className="card-title">{ pokemon.name }</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};
