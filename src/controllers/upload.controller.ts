import { Request, Response } from 'express';

const uploadController = (req: Request, res: Response): void => {
  console.log(12121212);
  try {
    res.send({ message: 'Uploaded from controller' });
  } catch (e: any) {
    console.log('e===> ', e);
    res.json({ message: 'Existe un error' });
  }
};

export { uploadController };
