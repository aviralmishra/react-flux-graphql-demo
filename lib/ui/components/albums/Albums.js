import React from 'react';

import MusicDataService from '../../MusicDataService';
import AlbumsStore from '../../stores/AlbumsStore';

class Albums extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
  }

  _getAppState = () => {
    return {albums: AlbumsStore.getAll()};
  };

  componentDidMount() {
    MusicDataService.fetchAlbums();
    AlbumsStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    AlbumsStore.removeListener('change', this.onChange);
  }

  onChange() {
    this.setState(this._getAppState());
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.albums.map((album) => {
              return <li key={album.id}>{album.title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Albums;
