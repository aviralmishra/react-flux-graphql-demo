import React from 'react';

import Header from './common/Header';
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
