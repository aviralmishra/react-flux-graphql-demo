import axios from 'axios';
import config from '../config';

import AlbumActions from '../actions/AlbumActions';

const AlbumService = {
  async getAlbumById(id) {
    const response = await axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: `
        query {
          album(id: "${id}") {
            id
            title
            released
            art
            artistId
            description
          }
        }`}
    );

    AlbumActions.loadAlbum(response.data.data.album);
    console.info('Load Album Response: ', response.data.data.album);
  },
  createAlbum(album) {
    const query = `
      mutation {
        createAlbum(input: {
          title: "${album.title}",
          released: "${album.released}",
          art: "${album.art}",
          artistId: "${album.artistId}",
          description: "${album.description}"
        }) {
          title
          released
          art
          artistId
          description
        }
      }`;

    console.info('createQuery:\n', query);
    return axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: query}
    );
  },
  updateAlbum(album) {
    const query = `
      mutation {
        editAlbum(input: {
          id: "${album.id}",
          title: "${album.title}",
          released: "${album.released}",
          art: "${album.art}",
          artistId: "${album.artistId}",
          description: "${album.description}"
        }) {
          id
          title
          released
          art
          artistId
          description
        }
      }`;

    console.info('editQuery:\n', query);
    return axios.post(
      `http://${config.host}:${config.port}/graphql`,
      {query: query}
    );
  }
};

export default AlbumService;
