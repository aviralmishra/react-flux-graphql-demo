import React from 'react';

import MusicDataService from '../../MusicDataService';
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
    MusicDataService.fetchArtists();
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
              return <li key={artist.id}>{artist.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Artists;
