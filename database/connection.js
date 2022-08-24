import mongo from 'mongoose';
import { config } from 'dotenv';
const { connect } = mongo;
config();

export function connectDatabase() {
  connect(process.env.BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));
}
