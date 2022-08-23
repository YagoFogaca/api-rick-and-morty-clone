import mongo from 'mongoose';

import { userSchema } from './user.schema.js';

const { Schema, model } = mongo;

const characterSchema = new Schema({
  id: { type: 'string', required: true },
  userName: { type: 'string', required: true },
  name: { type: 'string', required: true },
  image: { type: 'string', required: true },
});

export const characterDb = model('Character', characterSchema);
