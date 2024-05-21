import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLFloat } from 'graphql';
import { menuData } from './menuData';

const MenuItemType = new GraphQLObjectType({
  name: 'MenuItem',
  fields: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    appetizers: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menuData.appetizers,
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

export default schema;
