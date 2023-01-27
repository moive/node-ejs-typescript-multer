import type { Request, Response } from 'express';
import Image from '../models/image.model';

const getImage = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  try {
    const image = await Image.findOne({ _id: id });
    res.render('detailImage', { title: 'Detail Image', image });
  } catch (e: any) {
    console.log(e);
    const error = { ok: false, message: 'Not found' };
    res.render('detailImage', { title: 'Detail Image', error });
  }
};

export { getImage };
