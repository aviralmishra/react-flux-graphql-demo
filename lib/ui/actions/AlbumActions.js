import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

const AlbumActions = {
  loadAlbum(album) {
    AppDispatcher.dispatch({actionType: ActionTypes.LOAD_ALBUM, album});
  },
  createOrEditAlbum(album) {
    AppDispatcher.dispatch({actionType: ActionTypes.CREATE_EDIT_ALBUM, album});
  },
  cancelEditAlbum() {
    AppDispatcher.dispatch({actionType: ActionTypes.CANCEL_EDIT_ALBUM});
  },
  deleteAlbum(albumId) {
    AppDispatcher.dispatch({actionType: ActionTypes.DELETE_ALBUM, albumId});
  }
};

export default AlbumActions;
