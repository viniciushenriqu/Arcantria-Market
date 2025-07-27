import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você vai usar o axios para enviar os dados ao backend
    console.log('Cadastro:', { nome, email, senha });
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <p>Crie sua conta para acessar o ArcantriaMarket</p>

        <input
          type="text"
          placeholder="Nome completo"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

        <p className="login-text">
          Já tem uma conta? <Link to="/">Entrar</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
