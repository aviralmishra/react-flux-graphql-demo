import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';

import { EventEmitter } from 'events';

class ArtistsStore extends EventEmitter {
  _artists = [];

  constructor( props ) {
    super( props );

    AppDispatcher.register( action => {
      switch ( action.actionType ) {
        case ActionTypes.RECEIVE_ARTISTS:
          this._artists = action.artists;
          this.emit( 'change' );
          break;
        default:
          break;
      }
    } );
  }

  getAll() {
    return this._artists;
  }
}

export default new ArtistsStore();
