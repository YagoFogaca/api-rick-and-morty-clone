import mongo from 'mongoose';

const { Schema, model } = mongo;

export const userSchema = new Schema({
  id: { type: 'string', required: true },
  name: { type: 'string', required: true },
  username: { type: 'string', required: true },
  email: { type: 'string', required: true },
  password: { type: 'string', required: true },
  image: { type: 'string', required: true },
});

export const userDb = model('User', userSchema);
