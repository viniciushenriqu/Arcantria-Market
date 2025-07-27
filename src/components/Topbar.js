import React from 'react';
import './Topbar.css';
import { FaSignOutAlt, FaEllipsisV } from 'react-icons/fa';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="balance">💰 120 ARC</span>
      </div>
      <div className="topbar-right">
        <FaEllipsisV className="topbar-icon" title="Mais opções" />
        <button className="logout-btn" title="Sair">
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}

export default Topbar;
