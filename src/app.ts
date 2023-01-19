import express from 'express';
import morgan from 'morgan';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

import { uploadRouter } from './routes';

const app = express();
// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Settings
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'views/layouts/Site'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/', uploadRouter);

export default app;
