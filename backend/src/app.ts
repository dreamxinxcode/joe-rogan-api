import express, { Request, Response } from 'express';
require('dotenv').config();

const app = express();
const PORT = 8080;

const db = require("./db");

const apiRouter = require('./routers/api')
app.use('/api', apiRouter(db));

app.get('/', (req: Request, res: Response) => {
  res.send('Home');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});