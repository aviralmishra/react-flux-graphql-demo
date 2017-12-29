import {EventEmitter} from 'events';

import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';
import ArtistService from '../services/ArtistService';
import DataLoaderService from '../services/DataLoaderService';

class ArtistStore extends EventEmitter {
  _state = {
    id: '',
    name: '',
    description: '',
    wikipedia: '',
    image: ''
  };

  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.LOAD_ARTIST:
          this._state = action.artist;
          this.emit('change');
          break;
        case ActionTypes.CREATE_EDIT_ARTIST:
          this._saveArtist(action.artist);
          break;
        default:
          break;
      }
    });
  }

  getState() {
    return this._state;
  }

  _saveArtist(artist) {
    if (artist.id) {
      console.info('Editing artist...');

      ArtistService.updateArtist(artist).then((response) => {
        console.info('Artist is successfully updated.', response);
        this._state.message = 'Artist is successfully updated.';
        DataLoaderService.loadArtists();
      }).catch(function (error) {
        console.error('An error occurred while updating artist:', error);
      });
    } else {
      console.info('Creating artist...');

      ArtistService.createArtist(artist).then((response) => {
        console.info('Artist is successfully created.', response);
        this._state.message = 'Artist is successfully created.';
        DataLoaderService.loadArtists();
      }).catch(function (error) {
        console.error('An error occurred while creating artist:', error);
      });
    }
  }
}

export default new ArtistStore();
