import { Request, Response, Router } from 'express';
import { ReqError } from '../interfaces/req.interfaces';
import multer from 'multer';
import { uploadController } from '../controllers/upload.controller';
import multerMiddleware from '../middlewares/upload';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  const year = new Date().getFullYear();
  res.render('index', { title: 'Home Page', year });
});

router.post(
  '/upload',
  (req: ReqError, res, next) => {
    multerMiddleware(req, res, (err) => {
      if (req.errors != null && req.errors.length > 0) {
        res.send({ ok: false, message: req.errors });

        next(err);
        return;
      }
      if (err instanceof multer.MulterError) {
        return res.send({ ok: false, message: err.message });
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      } else if (err) {
        req.errors = err.message;
        return res.send({ ok: false, message: err.message });
      } else {
        if (req.errors) {
          req.errors = err;
        }

        next();

        // eslint-disable-next-line no-useless-return
        return;
      }
    });
  },
  uploadController
);

export { router as uploadRouter };
