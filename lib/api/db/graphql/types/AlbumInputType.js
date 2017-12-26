import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

module.exports = new GraphQLInputObjectType({
  name: 'AlbumInput',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    released: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    art: {
      type: GraphQLString
    },
    artistId: {
      type: GraphQLString
    }
  })
});
