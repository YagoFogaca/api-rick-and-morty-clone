import express from 'express';
import cors from 'cors';
import routerUser from './routes/user.route.js';
import { connectDatabase } from './database/connection.js';
import routerCharacter from './routes/character.route.js';
import routerDocs from './routes/swagger.route.js';
import { config } from 'dotenv';

config();
const port = process.env.PORT || 3001;
const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());
app.use('/users', routerUser);
app.use('/', routerCharacter);
app.use('/api', routerDocs);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
