import React from 'react';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import ProductList from './pages/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;