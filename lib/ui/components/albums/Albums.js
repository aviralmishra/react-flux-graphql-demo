import React from 'react';
import {Link} from 'react-router-dom';

import DataLoaderService from '../../services/DataLoaderService';
import AlbumListStore from '../../stores/AlbumListStore';

class Albums extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
  }

  _getAppState = () => {
    return AlbumListStore.getState();
  };

  componentDidMount() {
    DataLoaderService.loadAlbums();
    AlbumListStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    AlbumListStore.removeListener('change', this.onChange);
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
              return <li key={album.id}>
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Albums;
