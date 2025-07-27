import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="home-content">
        <h1>Bem-vindo ao ArcantriaMarket</h1>
        <p>Acesse rapidamente as funcionalidades principais:</p>

        <div className="home-buttons">
          <Link to="/marketplace" className="home-btn">🛒 Acessar Marketplace</Link>
          <Link to="/profile" className="home-btn">🎒 Ver Inventário</Link>
          <Link to="/buy-crypto" className="home-btn">💰 Comprar Moedas</Link>
          <Link to="/withdraw" className="home-btn">📤 Sacar Moedas</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
