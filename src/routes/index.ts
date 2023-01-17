import { Request, Response, Router } from 'express';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  // res.send({ message: "Welcome to the Home page!" });
  res.render('index', { title: 'Home Page' });
});

export { router as uploadRouter };
