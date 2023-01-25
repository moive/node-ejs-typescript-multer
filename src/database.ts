import { connect } from 'mongoose';

async function dbConnect(): Promise<void> {
  const DB_URI = process.env['DB_URI'] as string;
  await connect(DB_URI);
}

dbConnect()
  .then(() => {
    console.log('Conexin ready! 👍😊');
  })
  .catch((e) => {
    console.log('Err 😢--> ', e);
  });
