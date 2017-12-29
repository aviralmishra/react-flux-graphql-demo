import React from 'react';

import Header from './common/Header';
import Footer from './common/Footer';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
