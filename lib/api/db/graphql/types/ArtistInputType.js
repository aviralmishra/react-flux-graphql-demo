import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

module.exports = new GraphQLInputObjectType({
  name: 'ArtistInput',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    wikipedia: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    }
  })
});
