import React from 'react';

export default function ShoppingCart() {
    return (
        <aside>
            <h2>Meu carrinho</h2>
            <ul>
                <li>Produto 01 - R$ 100,00 - <a href="#">Remover</a></li>
                <li>Produto 02 - R$ 100,00 - <a href="#">Remover</a></li>
                <li>Produto 03 - R$ 100,00 - <a href="#">Remover</a></li>
            </ul>
            <p>Valor total da compra: <span>R$ 300,00</span></p>

            <button>Finalizar compra</button>
        </aside>
    )
}