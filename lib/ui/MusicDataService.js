import axios from 'axios';
import config from 'ui/config';

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
    console.info('API Response: ', response);
  }
};

export default MusicDataService;
