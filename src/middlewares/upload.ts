import type { Request } from 'express';
import multer, { diskStorage } from 'multer';
import path from 'path';
import type { ReqError } from '../interfaces/req.interfaces';

const PATH_STORAGE = path.join(__dirname, '../public/uploads');
const maxSize = 2 * 1024 * 1024; // for 1MB

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split('.').pop() ?? 'jpg';
    const fileNameRandom = `${new Date().getFullYear()}-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  }
});

const fileFilter = (req: ReqError, file: Express.Multer.File, cb: any): any => {
  const ext = path.extname(file.originalname);
  const msgErrorNoExt = 'Only .png, .jpg and .jpeg format allowed!';
  if (ext === '.psd' || ext === '.exe' || ext === '.msi' || ext === '.mp4') {
    req.errors = msgErrorNoExt;
    // cb(new MulterError('LIMIT_UNEXPECTED_FILE'));
    return cb(null, false);
  }
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
    return cb(new Error(msgErrorNoExt));
  }
  return cb(null, true);
};

const limits = { files: 1, fileSize: maxSize };

const multerMiddleware = multer({ storage, fileFilter, limits });
export default multerMiddleware.single('file');
