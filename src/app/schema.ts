import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLFloat,
  } from 'graphql';
  import { menuData } from '../utils/menuData';
  
  const GenericMenuItemType = new GraphQLObjectType({
    name: 'MenuItem',
    fields: {
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      price: { type: GraphQLFloat },
    },
  });
  
  const SandwichItemType = new GraphQLObjectType({
    name: 'SandwichItem',
    fields: {
      type: { type: GraphQLString },
      bread: { type: new GraphQLList(GraphQLString) },
      halfPrice: { type: GraphQLFloat },
      fullPrice: { type: GraphQLFloat },
      items: { type: new GraphQLList(GenericMenuItemType) },
    },
  });
  
  const MexicanItemType = new GraphQLObjectType({
    name: 'MexicanFoodItem',
    fields: {
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      price: { type: GraphQLFloat },
      servedWith: { type: GraphQLString },
    },
  });
  
  const EnchiladaOptionType = new GraphQLObjectType({
    name: 'EnchiladaOption',
    fields: {
      type: { type: GraphQLString },
      uno: { type: GraphQLFloat },
      dos: { type: GraphQLFloat },
      tres: { type: GraphQLFloat },
    },
  });
  
  const EnchiladaItemType = new GraphQLObjectType({
    name: 'EnchiladaItem',
    fields: {
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      options: { type: new GraphQLList(EnchiladaOptionType) },
      price: { type: GraphQLFloat },
    },
  });
  
  const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      appetizers: {
        type: new GraphQLList(GenericMenuItemType),
        resolve: () => menuData.appetizers,
      },
      sandwiches: {
        type: new GraphQLList(SandwichItemType),
        resolve: () => menuData.sandwiches,
      },
      entrees: {
        type: new GraphQLList(GenericMenuItemType),
        resolve: () => menuData.entrees,
      },
      soupSaladCombos: {
        type: new GraphQLList(GenericMenuItemType),
        resolve: () => menuData.soupSaladCombos,
      },
      fajitas: {
        type: new GraphQLList(MexicanItemType),
        resolve: () => menuData.fajitas,
      },
      tacos: {
        type: new GraphQLList(MexicanItemType),
        resolve: () => menuData.tacos,
      },
      enchiladas: {
        type: new GraphQLList(EnchiladaItemType),
        resolve: () => menuData.enchiladas,
      },
      quiche: {
        type: new GraphQLList(GenericMenuItemType),
        resolve: () => menuData.quiche,
      },
      greenSalads: {
        type: new GraphQLList(GenericMenuItemType),
        resolve: () => menuData.greenSalads,
      },
      getAllMenuItems: {
        type: new GraphQLList(GenericMenuItemType),
        resolve: () => Object.values(menuData).flat(),
      },
      customQuery: {
        type: new GraphQLList(GenericMenuItemType),
        args: {
          search: { type: GraphQLString },
        },
        resolve: (_, args) => {
          const allItems = Object.values(menuData).flat();
          return allItems.filter(
            (item) =>
              'description' in item && item.description.toLowerCase().includes(args.search.toLowerCase()),
          );
        },
      },
    },
  });
  
  const schema = new GraphQLSchema({
    query: RootQueryType,
  });
  
  export default schema;
  