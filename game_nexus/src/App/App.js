//React Imports
import React from 'react';
//component Files import
import "./App.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
      		<h1>Hi from zeyad i'll add the components here</h1>
          <body>
            <h3>Body section will be here</h3>
            <div>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button color="primary">Two</Button>
                <Button color="primary">Three</Button>
                <Button variant="contained" color="primary"> Secondary </Button>
                <Button variant="outlined" color="primary"> Primary </Button>
              </ButtonGroup>
              {/* Testing Material UI Features */}
            </div>
          </body>
          <Footer />
		</>
    );
  }
}

export default App;