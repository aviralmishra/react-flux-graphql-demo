import { GraphQLNonNull } from 'graphql';

import ArtistType from '../types/ArtistType';
import ArtistInputType from '../types/ArtistInputType';

module.exports = {
  type: ArtistType,
  args: {
    input: {
      type: new GraphQLNonNull( ArtistInputType )
    }
  },
  resolve( _, {
    input
  }, { dbHelper } ) {
    return dbHelper.createArtist( input );
  },
};
