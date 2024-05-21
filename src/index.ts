import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();
const PORT = 4000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
