import axios from 'axios';
import config from '../config';

import ArtistActions from '../actions/ArtistActions';

const ArtistService = {
  async getArtistById(id) {
    const response = await axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: `
        query {
          artist(id: "${id}") {
            id
            name
            description
            wikipedia
            image
          }
        }`}
    );

    ArtistActions.loadArtist(response.data.data.artist);
    console.info('Load Artist Response: ', response.data.data.artist);
  },
  createArtist(artist) {
    const query = `
      mutation {
        createArtist(input: {
          name: "${artist.name}",
          description: "${artist.description}"
          wikipedia: "${artist.wikipedia}",
          image: "${artist.image}"
        }) {
          name
          description
          wikipedia
          image
        }
      }`;

    console.info('createQuery:\n', query);
    return axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: query}
    );
  },
  updateArtist(artist) {
    const query = `
      mutation {
        editArtist(input: {
          id: "${artist.id}",
          name: "${artist.name}",
          description: "${artist.description}"
          wikipedia: "${artist.wikipedia}",
          image: "${artist.image}"
        }) {
          name
          description
          wikipedia
          image
        }
      }`;

    console.info('editQuery:\n', query);
    return axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: query}
    );
  }
};

export default ArtistService;
