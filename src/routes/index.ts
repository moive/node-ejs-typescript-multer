import { Request, Response, Router } from 'express';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  // res.send({ message: "Welcome to the Home page!" });
  const year = new Date().getFullYear();
  res.render('index', { title: 'Home Page', year });
});

export { router as uploadRouter };
