import {GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'Album',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    id: {
      type: new GraphQLNonNull(GraphQLString)
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
