import {GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'Artist',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    id: {
      type: new GraphQLNonNull(GraphQLString)
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
