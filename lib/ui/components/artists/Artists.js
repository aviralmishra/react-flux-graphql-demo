import React from 'react';
import {Link} from 'react-router-dom';

import DataLoaderService from '../../services/DataLoaderService';
import ArtistsStore from '../../stores/ArtistsStore';

class Artists extends React.Component {
  constructor(props) {
    super(props);

    this.state = this._getAppState();
    this.onChange = this.onChange.bind(this);
  }

  _getAppState = () => {
    return {artists: ArtistsStore.getAll()};
  };

  componentDidMount() {
    DataLoaderService.loadArtists();
    ArtistsStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    ArtistsStore.removeListener('change', this.onChange);
  }

  onChange() {
    this.setState(this._getAppState());
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.artists.map((artist) => {
              return <li key={artist.id}>
                <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Artists;
