import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfilePanel from './assets/ProfilePanel';
import Card from './Card.jsx';

function Main() {
  return (
    <div>
      <ProfilePanel />
      <Card />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

