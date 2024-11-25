// src/App.js
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const firstName = "John"; // Replace with your name or keep it blank

  return (
    <div className="container mt-5">
      <div className="card" style={{ width: '18rem' }}>
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <p className="mt-3">
        {firstName ? `Hello, ${firstName}!` : 'Hello, there!'}
      </p>
      {firstName && <img src="https://via.placeholder.com/100" alt="Optional Image" />}
    </div>
  );
}

export default App;