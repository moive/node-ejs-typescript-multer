import { Request } from 'express';
import multer, { diskStorage } from 'multer';

const PATH_STORAGE = `${process.cwd()}/src/public/uploads`;
const maxSize = 1 * 1024 * 1024; // for 1MB

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

const limits = { fileSize: maxSize };

const multerMiddleware = multer({ storage, limits });
export default multerMiddleware;
