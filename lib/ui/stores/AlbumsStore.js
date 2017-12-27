import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

import {EventEmitter} from 'events';

class AlbumsStore extends EventEmitter {
  _albums = [];

  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_ALBUMS:
          this._albums = action.albums;
          this.emit('change');
          break;
        default:
          break;
      }
    });
  }

  getAll() {
    return this._albums;
  }
}

export default new AlbumsStore();
