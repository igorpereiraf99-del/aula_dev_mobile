import React, { useState } from 'react';
import './styles.css';

export default function ProfilePanel() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="profile-panel">
      <img
        className="profile-pic"
        src="https://i.pravatar.cc/80"
        alt="Foto do usuário"
      />
      <div className="username">{loggedIn ? 'Usuário Logado' : 'Usuário Anônimo'}</div>
      <div className={`status ${loggedIn ? 'online' : 'offline'}`}>
        {loggedIn ? 'Online' : 'Offline'}
      </div>
      <button className="button" onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Sair' : 'Entrar'}
      </button>
    </div>
  );
}
