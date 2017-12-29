import {GraphQLNonNull} from 'graphql';

import AlbumType from '../types/AlbumType';
import AlbumInputType from '../types/AlbumInputType';

module.exports = {
  type: AlbumType,
  args: {
    input: {
      type: new GraphQLNonNull(AlbumInputType)
    }
  },
  resolve(_, {
    input
  }, {dbHelper}) {
    return dbHelper.createAlbum(input);
  }
};
