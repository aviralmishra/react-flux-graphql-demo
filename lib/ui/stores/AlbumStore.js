import {EventEmitter} from 'events';

import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';
import AlbumService from '../services/AlbumService';
import DataLoaderService from '../services/DataLoaderService';

class AlbumsStore extends EventEmitter {
  _state = {
    id: '',
    title: '',
    description: '',
    released: '',
    art: '',
    artistId: ''
  };

  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.LOAD_ALBUM:
          this._state = action.album;
          this.emit('change');
          break;
        case ActionTypes.CREATE_EDIT_ALBUM:
          this._saveAlbum(action.album);
          break;
        default:
          break;
      }
    });
  }

  getState() {
    return this._state;
  }

  _saveAlbum(album) {
    if (album.id) {
      console.info('Editing album...');

      AlbumService.updateAlbum(album).then((response) => {
        console.info('Album is successfully updated.', response);
        this._state.message = 'Album is successfully updated.';
        DataLoaderService.loadAlbums();
      }).catch(function(error) {
        console.error('An error occurred while updating album:', error);
      });
    } else {
      console.info('Creating album...');

      AlbumService.createAlbum(album).then((response) => {
        console.info('Album is successfully created.', response);
        this._state.message = 'Album is successfully created.';
        DataLoaderService.loadAlbums();
      }).catch(function(error) {
        console.error('An error occurred while creating album:', error);
      });
    }
  }
}

export default new AlbumsStore();
