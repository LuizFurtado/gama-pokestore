import React from 'react'

export default function Pagination( { goToNextPage, goToPreviousPage }) {
  return (
    <div>
      { goToPreviousPage && <button onClick={ goToPreviousPage }>Página Anterior</button> }
      { goToNextPage && <button onClick={ goToNextPage }>Próxima Página</button> }
    </div>
  );
};
