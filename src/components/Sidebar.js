import React from 'react';
import './Sidebar.css';
import { FaBox } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img
          src="https://via.placeholder.com/80"
          alt="User"
          className="sidebar-avatar"
        />
        <p className="sidebar-username">Usuário Teste</p>
      </div>

      <div className="sidebar-inventory">
        <h4>Inventário</h4>
        <ul>
          <li><FaBox /> Espada Lendária</li>
          <li><FaBox /> Poção de Mana</li>
          <li><FaBox /> Armadura Sagrada</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
