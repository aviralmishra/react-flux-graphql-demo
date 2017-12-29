import {EventEmitter} from 'events';

import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

class AlbumListStore extends EventEmitter {
  _state = {
    albums: [],
    message: null
  };

  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_ALBUMS:
          this._state.albums = action.albums;
          this.emit('change');
          break;
        default:
          break;
      }
    });
  }

  getState() {
    return this._state;
  }
}

export default new AlbumListStore();
