import express from 'express';
import morgan from 'morgan';
import winston from 'winston';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import v1Routes from './routes/v1';
import config, { database } from '../config';
import model from './models';
import environments from '../config/environments';

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cookies
app.use(cookieParser());

// logging
const logger = new winston.Logger({
  transports: [
    new winston.transports.File(environments.winston.file),
    new winston.transports.Console(environments.winston.console)
  ],
  exitOnError: false
});

logger.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};

app.use(morgan("combined", { "stream": logger.stream }));

// routes
app.use('/api/v1', v1Routes);

// Start the server with sequelize synced
model.init(environments.database['development']).sequelize.sync().then( () => {
  app.listen(environments.api.port, () => {
    console.log(`API ===> 🐙  Express Server listening on ${environments.api.host}:${environments.api.port}`);
  });
});
