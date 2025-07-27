import React from 'react';
import { Link } from 'react-router-dom';
import './Marketplace.css';

const mockItems = [
  { id: 1, nome: 'Espada Lendária', preco: '50 ARC' },
  { id: 2, nome: 'Poção Mística', preco: '15 ARC' },
  { id: 3, nome: 'Armadura do Caos', preco: '120 ARC' }
];

function Marketplace() {
  return (
    <div className="marketplace-container">
      <h2>Itens Disponíveis</h2>
      <div className="items-grid">
        {mockItems.map(item => (
          <Link to={`/item/${item.id}`} key={item.id} className="item-card">
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
