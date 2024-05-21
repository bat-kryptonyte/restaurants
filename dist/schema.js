"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const menuData_1 = require("./menuData");
const MenuItemType = new graphql_1.GraphQLObjectType({
    name: 'MenuItem',
    fields: {
        name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLFloat },
    },
});
const RootQueryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        appetizers: {
            type: new graphql_1.GraphQLList(MenuItemType),
            resolve: () => menuData_1.menuData.appetizers,
        },
        // Add other menu sections here...
    },
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQueryType,
});
exports.default = schema;
