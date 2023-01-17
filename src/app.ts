import express from 'express';
import morgan from 'morgan';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

import { uploadRouter } from './routes';
import multer from 'multer';

const app = express();
// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Settings
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'views/layouts/Site'));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file: Express.Multer.File, cb) => {
    const ext = file.originalname.split('.').pop();
    const fileName2 = `image-${Date.now()}.${ext ?? 'jpg'}`;
    cb(null, fileName2);
  }
});

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(
  multer({
    storage,
    dest: path.join(__dirname, 'public/uploads')
  }).single('file')
);

// Routes
app.use('/', uploadRouter);

export default app;
