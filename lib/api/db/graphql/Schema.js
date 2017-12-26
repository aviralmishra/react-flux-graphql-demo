import {GraphQLSchema, GraphQLObjectType, GraphQLList} from 'graphql';

import AlbumType from './types/AlbumType';
import ArtistType from './types/ArtistType';

import CreateAlbumMutation from './mutations/CreateAlbumMutation';
import CreateArtistMutation from './mutations/CreateArtistMutation';

let Schema = () => {
  let graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        albums: {
          type: new GraphQLList(AlbumType),
          resolve: (_, args, {dbHelper}) => {
            return dbHelper.getAllAlbums();
          }
        },
        artists: {
          type: new GraphQLList(ArtistType),
          resolve: (_, args, {dbHelper}) => dbHelper.getAllArtists()
        }
      })
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => (
        {createAlbum: CreateAlbumMutation, createArtist: CreateArtistMutation}
      )
    })
  });

  return graphQLSchema;
};

export default Schema;
