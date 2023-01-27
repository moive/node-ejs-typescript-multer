import { type Request, type Response, Router } from 'express';
import { get404 } from '../controllers/404.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Home Page' });
});

router.get('/404', get404);

export { router as uploadRouter };
