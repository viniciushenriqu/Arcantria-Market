import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Profile.css';

const inventario = [
  { id: 1, nome: 'Espada Lendária', tipo: 'Arma' },
  { id: 2, nome: 'Armadura de Fogo', tipo: 'Defesa' },
  { id: 3, nome: 'Poção de Mana x3', tipo: 'Consumível' },
  { id: 4, nome: 'Anel Mágico', tipo: 'Acessório' },
];

function Profile() {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="profile-content">
        <h2>Meu Inventário</h2>
        <div className="inventory-grid">
          {inventario.map((item) => (
            <div key={item.id} className="inventory-card">
              <span className="item-icon">🎒</span>
              <h3>{item.nome}</h3>
              <p>{item.tipo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
