import React from 'react';
import './style.css';

export default function Pagination( { goToNextPage, goToPreviousPage }) {
  return (
    <div id="page-load" className="text-center">
      {/* { goToPreviousPage && <button onClick={ goToPreviousPage }>Página Anterior</button> } */}
      { goToNextPage && <button className="btn btn-outline-secondary" onClick={ goToNextPage }>Carregar mais...</button> }
    </div>
  );
};
