import express from 'express';
import morgan from 'morgan';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

import { uploadRouter } from './routes';
import { galleryRouter } from './routes/gallery';
import TimeFormat from './middlewares/timeFormat';

const app = express();
// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Settings
app.set('views', path.join(__dirname, 'views/pages'));
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'views/layouts/Site'));
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(TimeFormat);

// Routes
app.use('/', uploadRouter);
app.use('/gallery', galleryRouter);

export default app;
