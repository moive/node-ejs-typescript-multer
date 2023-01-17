import { Request, Response, Router } from 'express';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  // res.send({ message: "Welcome to the Home page!" });
  const year = new Date().getFullYear();
  res.render('index', { title: 'Home Page', year });
});

router.post('/upload', (req, res) => {
  console.log(req.file);
  res.send({ message: 'Uploaded' });
});

export { router as uploadRouter };
