//React Imports
import React from 'react';
//component Files import
import "./App.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// Font import
import '@fortawesome/fontawesome-free/css/all.min.css';



class App extends React.Component {
  render() {
    return (
		<>
          <Header />
      		<h1>Hi from zeyad i'll add the components here</h1>
          <body>
            <h3>Body section will be here</h3>
          </body>
          <Footer />
		</>
    );
  }
}

export default App;