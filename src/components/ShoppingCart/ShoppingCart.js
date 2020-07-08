import React from 'react';
import './style.css';

export default function ShoppingCart() {
    return (
        <aside id="shopping-cart">
            <h2>Meu carrinho</h2>
            <ul>
                <li>Produto 01 - R$ 100,00 - <a href="#">Remover</a></li>
                <li>Produto 02 - R$ 100,00 - <a href="#">Remover</a></li>
                <li>Produto 03 - R$ 100,00 - <a href="#">Remover</a></li>
            </ul>
            <p>Valor total da compra: <span>R$ 300,00</span></p>

            <div className="text-center">
                <button className="btn btn-outline-success">Finalizar compra</button>
            </div>
            
        </aside>
    )
}