// src/App.jsx
import React from 'react';
import Navbar from './shared/Navbar'; 
import Sidebar from './components/Sidebar/Sidebar';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div className="content">
                    <ProductList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
