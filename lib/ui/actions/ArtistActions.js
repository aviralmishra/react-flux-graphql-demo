import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

const ArtistActions = {
  loadArtist(artist) {
    AppDispatcher.dispatch({actionType: ActionTypes.LOAD_ARTIST, artist});
  },
  createOrEditArtist(artist) {
    AppDispatcher.dispatch({actionType: ActionTypes.CREATE_EDIT_ARTIST, artist});
  },
  cancelEditArtist() {
    AppDispatcher.dispatch({actionType: ActionTypes.CANCEL_EDIT_ARTIST});
  },
  deleteArtist(artistId) {
    AppDispatcher.dispatch({actionType: ActionTypes.DELETE_ARTIST, artistId});
  }
};

export default ArtistActions;
