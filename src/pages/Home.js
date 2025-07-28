import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Home.css';

function Home() {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="home-content">
        
        <div className="home-buttons-grid">
          <Link to="/marketplace" className="home-box-btn">
            <span role="img" aria-label="Marketplace">🛒</span><br />
            Marketplace
          </Link>

          <Link to="/profile" className="home-box-btn">
            <span role="img" aria-label="Inventário">🎒</span><br />
            Inventário
          </Link>

          <Link to="/buy-crypto" className="home-box-btn">
            <span role="img" aria-label="Comprar Moedas">💰</span><br />
            Comprar Moedas
          </Link>

          <Link to="/withdraw" className="home-box-btn">
            <span role="img" aria-label="Sacar">📤</span><br />
            Sacar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
