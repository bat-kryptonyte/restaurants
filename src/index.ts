import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

import restRoutes from './routes';

const app = express();
const PORT = 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

app.set('json spaces', 2);

app.use('/api', restRoutes);


export default app;
