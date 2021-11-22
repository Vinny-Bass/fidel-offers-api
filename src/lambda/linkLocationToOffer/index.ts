import { LinkLocationToOfferDTO } from '@domain/location/data/ILocationData';
import LinkLocationToOfferController from '@infra/location/controllers/LinkLocationToOfferController';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import { Handler, Context } from 'aws-lambda';

const linkLocationToOffer: Handler = async (event, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.body) return {};

  const data: LinkLocationToOfferDTO = event.body;

  const linkLocationToOfferController = new LinkLocationToOfferController();
  const response = await linkLocationToOfferController.handle(data);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

const inputSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        locationId: { type: 'string' },
        offerId: { type: 'string' },
      },
      required: ['locationId', 'offerId'],
    },
  },
};

export default middy(linkLocationToOffer)
  .use(jsonBodyParser())
  .use(validator({ inputSchema }))
  .use(
    httpErrorHandler({
      logger: undefined,
    }),
  );
