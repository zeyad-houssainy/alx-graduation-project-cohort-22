//React Imports
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
//component Files import
import "./App.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '../Pages/ProductList/ProductList';
import NoPage from '../Pages/NoPage/NoPage';

// Font import
import '@fortawesome/fontawesome-free/css/all.min.css';

// Material UI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';




class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<NoPage />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    );
  }
}

export default App;
