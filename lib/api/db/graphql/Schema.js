import {GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull} from 'graphql';

import AlbumType from './types/AlbumType';
import ArtistType from './types/ArtistType';

import CreateAlbum from './mutations/CreateAlbum';
import EditAlbum from './mutations/EditAlbum';
import CreateArtist from './mutations/CreateArtist';
import EditArtist from './mutations/EditArtist';

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
        album: {
          type: AlbumType,
          args: {
            id: {
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: (_, args, {dbHelper}) => {
            return dbHelper.getAlbumById(args.id);
          }
        },
        artists: {
          type: new GraphQLList(ArtistType),
          resolve: (_, args, {dbHelper}) => dbHelper.getAllArtists()
        },
        artist: {
          type: ArtistType,
          args: {
            id: {
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: (_, args, {dbHelper}) => {
            return dbHelper.getArtistById(args.id);
          }
        }
      })
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => (
        {createAlbum: CreateAlbum, editAlbum: EditAlbum, createArtist: CreateArtist, editArtist: EditArtist}
      )
    })
  });

  return graphQLSchema;
};

export default Schema;
