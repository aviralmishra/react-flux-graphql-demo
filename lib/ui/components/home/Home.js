import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>MusicDB</h1>
        <p>A data-driven web app built with React & GraphQL</p>
        <p>
          <Link to='/albums'>
            <span className="btn btn-lg btn-info" aria-hidden="true" role="button">Explore MusicDB</span>
          </Link>
        </p>
      </div>
    );
  }
}

export default Home;
