import React from 'react';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="content">
        <main>
          <h1>Main View</h1>
        </main>
      </div>
    </div>
  );
}

export default App;