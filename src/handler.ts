import { CreateLocationDTO } from '@domain/location/data/ILocationData';
import CreateLocationController from '@infra/location/controllers/CreateLocationController';
import { Handler, Context, APIGatewayEvent } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';

const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);

dotenv.config({
  path: dotenvPath,
});

export const createLocation: Handler = async (event: APIGatewayEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.body) return {};

  const data: CreateLocationDTO = JSON.parse(event.body);

  try {
    const createLocationController = new CreateLocationController();
    const location = await createLocationController.handle(data);

    console.log(location);

    return {
      data: location,
    };
  } catch (err) {
    console.log(123, err);
    return {
      error: err,
    };
  }
};
