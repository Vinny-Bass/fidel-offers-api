import dotenv from 'dotenv';
import path from 'path';

import createLocation from './lambda/createLocation';
import createOffer from './lambda/createOffer';

const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);

dotenv.config({
  path: dotenvPath,
});

export { createLocation, createOffer };
