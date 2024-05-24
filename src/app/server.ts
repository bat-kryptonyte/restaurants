import app from './app';

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
  console.log(`REST API is running on http://localhost:${PORT}/api`);
});

export default server;
