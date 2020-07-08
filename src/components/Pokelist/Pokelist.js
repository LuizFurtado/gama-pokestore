import React from 'react'
import typeColors from '../../helpers/typeColors';
import './style.css';

export default function Pokelist({ pokedata }) {
  return (
    <section id="pokemon-list" className="container-fluid">
      <div className="row">
        {
          pokedata.map((pokemon, index) => (
            <div className="col-sm-3">
              <div className="card" key={ `${pokemon.name }-${ index }` }>
                <img src={ pokemon.image } className="card-img-top" alt="Imagem do pokemon { pokemon.name }" />
                <div className="card-body">
                  <h5 className="card-title">{ pokemon.name }</h5>
                  <div className="card-body">
                    <div className="Card__types">
                      {
                        pokemon.types.map(type => {
                          return (
                            <div 
                              className="Card__type"
                              style={{ backgroundColor: typeColors[type.type.name] }}
                            >
                              {type.type.name}
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="Card__price">
                      <span>{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pokemon.price) }</span>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};
