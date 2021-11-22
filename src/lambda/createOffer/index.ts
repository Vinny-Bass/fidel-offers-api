import { CreateOfferDTO } from '@domain/offer/data/IOfferData';
import CreateOfferController from '@infra/offer/controllers/CreateOfferController';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import { Handler, Context } from 'aws-lambda';

const createOffer: Handler = async (event, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.body) return {};

  const data: CreateOfferDTO = event.body;

  const createOfferController = new CreateOfferController();
  const offer = await createOfferController.handle(data);

  return {
    statusCode: 200,
    body: JSON.stringify(offer),
  };
};

const inputSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        brandId: { type: 'string' },
      },
      required: ['name', 'brandId'],
    },
  },
};

export default middy(createOffer)
  .use(jsonBodyParser())
  .use(validator({ inputSchema }))
  .use(httpErrorHandler());
