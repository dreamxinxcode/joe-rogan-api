import express, { Request, Response, Router } from 'express';
const router = express.Router();

module.exports = (database: any) => { 
  router.get('/quote', (req: Request, res: Response) => {
    database.getRandomQuote()
    .then((resolve: Object) => res.send(resolve))
    .catch((e: string) => console.log(e))
  });

  router.get('/quote/all', (req: Request, res: Response) => {
    database.getAllQuotes()
    .then((resolve: Object) => res.send(resolve))
    .catch((e: string) => console.log(e))
  });

  return router;
};

