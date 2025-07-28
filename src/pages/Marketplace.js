import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Marketplace.css';

const categorias = [
  { id: 1, nome: 'Armas', emoji: '🗡️' },
  { id: 2, nome: 'Armaduras', emoji: '🛡️' },
  { id: 3, nome: 'Poções', emoji: '🧪' },
  { id: 4, nome: 'Magias', emoji: '✨' },
  { id: 5, nome: 'Itens Mágicos', emoji: '🪄' },
  { id: 6, nome: 'Montarias', emoji: '🐎' },
  { id: 7, nome: 'Acessórios', emoji: '💍' },
  { id: 8, nome: 'Livros & Tomos', emoji: '📖' },
  { id: 9, nome: 'Craft / Recursos', emoji: '🪓' },
  { id: 10, nome: 'Mascotes', emoji: '🐉' },
  { id: 11, nome: 'Ferramentas', emoji: '🛠️' },
  { id: 12, nome: 'Gemas Raras', emoji: '💎' },
];

function Marketplace() {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="marketplace-content">
        <h1>Marketplace - Categorias</h1>
        <div className="categoria-grid">
          {categorias.map((cat) => (
            <div key={cat.id} className="categoria-card">
              <span className="categoria-emoji">{cat.emoji}</span>
              <span>{cat.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Marketplace;
