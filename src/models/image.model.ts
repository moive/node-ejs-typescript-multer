import { model, Schema } from 'mongoose';
import type { IStorage } from '../interfaces/storage.interface';

const ImageSchema = new Schema<IStorage>(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    filename: {
      type: String
    },
    path: {
      type: String
    },
    originalname: {
      type: String
    },
    mimetype: {
      type: String
    },
    size: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<IStorage>('image', ImageSchema);
