import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <h2>Meu Perfil</h2>
      <p>Nome: Usuário Teste</p>
      <p>Email: usuario@exemplo.com</p>
      <p>Carteira: 0x123...abc (simulada)</p>
      <button>Conectar MetaMask</button>
    </div>
  );
}

export default Profile;
