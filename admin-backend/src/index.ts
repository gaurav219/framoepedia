import express, { Express, Request, Response } from 'express';
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from admin-backend</h1>');
});

app.listen(5000, () => {
  console.log('Listening to port 5000...');
});
