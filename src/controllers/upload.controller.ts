import type { Response } from 'express';
import type { ReqError } from '../interfaces/req.interfaces';

const uploadController = (req: ReqError, res: Response): Response => {
  const file = req.file;

  if (!file) {
    const error = new Error('Please upload a file');
    return res.json({ ok: false, message: error.message });
  }
  try {
    return res.send({ message: 'Uploaded from controller' });
  } catch (e: any) {
    console.log('e===> ', e);
    return res.json({ message: 'Something wrong' });
  }
};

export { uploadController };
