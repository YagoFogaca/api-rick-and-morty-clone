import mongo from 'mongoose';

const { Schema, model } = mongo;

const characterSchema = new Schema({
  id: { type: 'string', required: true },
  user: { type: 'string', required: true },
  name: { type: 'string', required: true },
  image: { type: 'string', required: true },
});

export const characterDb = model('Character', characterSchema);
