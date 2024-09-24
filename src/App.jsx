import React from 'react';
import Navbar from './shared/Navbar';
import './App.css'; // Importa el archivo CSS

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <main>
          <h1>Main View</h1>
        </main>
      </div>
    </div>
  );
}

export default App;