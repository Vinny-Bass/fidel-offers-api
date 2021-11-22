import { CreateLocationDTO } from '@domain/location/data/ILocationData';
import CreateLocationController from '@infra/location/controllers/CreateLocationController';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import { Handler, Context } from 'aws-lambda';

const createLocation: Handler = async (event, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.body) return {};

  const data: CreateLocationDTO = event.body;

  const createLocationController = new CreateLocationController();
  const location = await createLocationController.handle(data);

  return {
    statusCode: 200,
    body: JSON.stringify(location),
  };
};

const inputSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        address: { type: 'string' },
        brandId: { type: 'string' },
      },
      required: ['address', 'brandId'],
    },
  },
};

export default middy(createLocation)
  .use(jsonBodyParser())
  .use(validator({ inputSchema }))
  .use(httpErrorHandler());
