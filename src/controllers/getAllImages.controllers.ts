import type { Request, Response } from 'express';
import Image from '../models/image.model';

const getAllImages = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const images = await Image.find();
  res.render('gallery', { title: 'Gallery Page', images });
};

export { getAllImages };
