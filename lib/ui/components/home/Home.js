import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>MusicDB</h1>
        <p>A data-driven web app built with React & GraphQL</p>
        <p>
          <a className="btn btn-lg btn-info" href="#" role="button">Explore MusicDB</a>
        </p>
      </div>
    );
  }
}

export default Home;
