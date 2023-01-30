import type { Request, Response } from 'express';
import type { ReqError } from '../interfaces/req.interfaces';
import Image from '../models/image.model';
import { unlink } from 'fs-extra';
import path from 'path';
import { cloudinary } from '../config';

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
    const resultCloud = await cloudinary.uploader.upload(file.path, {
      folder: 'moive/',
      use_filename: true,
      unique_filename: false,
      overwrite: true
    });
    /* console.log('======');
    console.log(resultCloud);
    console.log('--------------'); */
    const { title, description } = req.body;
    const image = new Image();
    image.title = title;
    image.description = description;
    image.filename = file.filename;
    image.path = '/uploads/' + file.filename;
    image.imageUrl = resultCloud.secure_url;
    image.public_id = resultCloud.public_id;
    image.originalname = file.originalname;
    image.mimetype = file.mimetype;
    image.size = file.size;
    /* console.log(image); */
    await image.save();
    await unlink(path.join(__dirname, '../public', image.path));
    res.redirect('/gallery');
    return;
    // return res.send({ message: 'Uploaded from controller', image });
  } catch (e: any) {
    console.log('e ===> ', e);
    return res.json({ message: 'Something wrong' });
  }
};

const getAllImages = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const images = await Image.find();
  res.render('gallery', { title: 'Gallery Page', images, namePage: 'gallery' });
};

const getImage = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  try {
    const image = await Image.findOne({ _id: id });
    res.render('detailImage', {
      title: 'Detail Image',
      image,
      namePage: 'gallery'
    });
  } catch (e: any) {
    console.log(e.message);
    const error = 'The resource could not be found';
    res.render('404', {
      title: 'Not Found',
      error,
      optsLink: {
        url: '/gallery',
        text: 'Go to Gallery'
      },
      namePage: 'gallery'
    });
  }
};

const deleteImage = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const { id } = req.params;
  try {
    const image = await Image.findByIdAndDelete(id);
    const result = await cloudinary.uploader.destroy(image!.public_id);
    // await unlink(path.join(__dirname, '../public' + image?.path));
    console.log(image);
    res.redirect('/gallery');
  } catch (e: any) {
    console.log(e.message);
    res.render('404', {
      title: 'Not Found',
      error: e.message,
      optsLink: {
        url: '/',
        text: 'Go Home'
      },
      namePage: 'gallery'
    });
  }
};

export { uploadController, getAllImages, getImage, deleteImage };
