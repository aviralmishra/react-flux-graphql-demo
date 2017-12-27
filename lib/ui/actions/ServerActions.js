import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

const ServerActions = {
  receiveAlbums(albums) {
    AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_ALBUMS, albums});
  },
  receiveArtists(artists) {
    AppDispatcher.dispatch({actionType: ActionTypes.RECEIVE_ARTISTS, artists});
  }
};

export default ServerActions;
