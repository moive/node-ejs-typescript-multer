import type { Response } from 'express';
import type { ReqError } from '../interfaces/req.interfaces';
import Image from '../models/image.model';

const uploadController = async (
  req: ReqError,
  res: Response
): Promise<Response | any> => {
  const file = req.file;

  if (!file) {
    const error = new Error('Please upload a file');
    return res.json({ ok: false, message: error.message });
  }
  try {
    const { title, description } = req.body;
    const image = new Image();
    image.title = title;
    image.description = description;
    image.filename = file.filename;
    image.path = '/uploads/' + file.filename;
    image.originalname = file.originalname;
    image.mimetype = file.mimetype;
    image.size = file.size;
    console.log(image);
    await image.save();
    res.redirect('/gallery');
    return;
    // return res.send({ message: 'Uploaded from controller', image });
  } catch (e: any) {
    console.log('e ===> ', e);
    return res.json({ message: 'Something wrong' });
  }
};

export { uploadController };
