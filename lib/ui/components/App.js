import React from 'react';

import Header from './common/Header';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
