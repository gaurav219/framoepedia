import express, { Express, Request, Response } from 'express';
const app: Express = express();
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';
import schema from './graph';
app.use(express.json());

app.use(cors());

const init = async () => {
  const server: ApolloServer = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.use(cors());

  app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello from admin-backend</h1>');
  });

  app.get('/home', (req: Request, res: Response) => {
    res.json({ name: 'gopuuuuuuu' });
  });

  app.listen(5000, () => {
    console.log('Listening to port 5000... and graphql at /graphql');
  });
};

init();
