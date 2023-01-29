import type { Request, Response } from 'express';
import Image from '../models/image.model';

const getImage = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  try {
    const image = await Image.findOne({ _id: id });
    res.render('detailImage', { title: 'Detail Image', image });
  } catch (e: any) {
    console.log(e.message);
    const error = 'The resource could not be found';
    res.render('404', {
      title: 'Not Found',
      error,
      optsLink: {
        url: '/gallery',
        text: 'Go to Gallery'
      }
    });
  }
};

export { getImage };
