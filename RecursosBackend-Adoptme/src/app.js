import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import dotenv from 'dotenv'
import __dirname from './utils/index.js';
import swaggerUiExpress from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc';


dotenv.config()

const swaggerOptions = {
    definition: {
      openapi: '3.0.1',
      info: {
        title: 'Documentación del poder y del saber',
        description: 'API pensada para clase de Swagger'
      }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
}
  

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(process.env.MONGO)

const specs = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());

app.use(
    '/apidocs',
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(specs)
  );

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
