import { type Request, type Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Home Page' });
});

export { router as uploadRouter };
