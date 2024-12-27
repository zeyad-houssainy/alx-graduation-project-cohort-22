//React Imports
import React from 'react';
//component Files import
import "./App.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '../Pages/ProductList/ProductList';

// Font import
import '@fortawesome/fontawesome-free/css/all.min.css';

// Material UI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProductList />
        <Footer />
      </>
    );
  }
}

export default App;