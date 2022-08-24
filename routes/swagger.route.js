import swaggerUi from 'swagger-ui-express';
import swaggerJson from '../swagger.json' assert { type: 'json' };
import { Router } from 'express';

const routerDocs = Router();

routerDocs.use('/docs', swaggerUi.serve);
routerDocs.get('/docs', swaggerUi.setup(swaggerJson));

export default routerDocs;
