import React from 'react';
import MusicDataService from '../MusicDataService';

class Main extends React.Component {
  async componentDidMount() {
    await MusicDataService.fetchAlbums();
  }

  render() {
    return (<div>
      <h2>Hello</h2>
    </div>);
  }
}

export default Main;
