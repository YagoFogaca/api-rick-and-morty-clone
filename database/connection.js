import mongo from 'mongoose';

const { connect } = mongo;

export function connectDatabase() {
  connect(process.env.BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));
}
