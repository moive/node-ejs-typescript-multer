import { Request, Response, Router } from 'express';
import { uploadController } from '../controllers/upload.controller';
import multerMiddleware from '../middlewares/upload';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  // res.send({ message: "Welcome to the Home page!" });
  const year = new Date().getFullYear();
  res.render('index', { title: 'Home Page', year });
});

router.post('/upload', multerMiddleware.single('file'), uploadController);

export { router as uploadRouter };
