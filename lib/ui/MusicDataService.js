import axios from 'axios';

import config from './config';
import ServerActions from './actions/ServerActions';

const MusicDataService = {
  async fetchAlbums() {
    const response = await axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: `{
        albums {
          _id
          id
          title
          released
          art
          artistId
        }
      }`}
    );

    ServerActions.receiveAlbums(response.data.data.albums);
    console.info('API Response: ', response.data.data.albums);
  },
  async fetchArtists() {
    const response = await axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: `{
        artists {
          _id
          id
          name
          description
          wikipedia
          image
        }
      }`}
    );

    ServerActions.receiveArtists(response.data.data.artists);
    console.info('API Response: ', response.data.data.artists);
  }
};

export default MusicDataService;
