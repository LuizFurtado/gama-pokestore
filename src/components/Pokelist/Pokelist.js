import React from 'react'

export default function Pokelist({ pokedata }) {
  return (
    <div>
      {
        pokedata.map((pokemon, index) => (
          <div key={ `${pokemon.name}-${index}` }>
            { pokemon.name } - { pokemon.id }
          </div>
        ))
      }
    </div>
  );
};
