import 'dotenv/config';
import app from './app';

import './database';

const PORT = process.env['PORT'] ?? 3000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
