import IOfferData, { CreateOfferDTO } from '@domain/offer/data/IOfferData';
import { OfferEntity } from '@domain/offer/entities/OfferEntity';
import { uuid } from 'uuidv4';

import DynamoDBClient from './DynamoDBClient';

export default class OfferProvider extends DynamoDBClient implements IOfferData {
  private tableName = 'LocationsOffers';

  public async getOffer(offerId: string): Promise<OfferEntity> {
    const offer = await this.client
      .get({
        TableName: this.tableName,
        Key: {
          pk: `offer-${offerId}`,
          sk: `offer-${offerId}`,
        },
      })
      .promise();

    return offer.Item as OfferEntity;
  }

  public async createOffer(data: CreateOfferDTO): Promise<OfferEntity> {
    const newOfferId = uuid();
    const toCreateOffer = {
      pk: `offer-${newOfferId}`,
      sk: `offer-${newOfferId}`,
      brandId: data.brandId,
      name: data.name,
      locationsTotal: 0,
    };

    try {
      await this.client
        .put({
          TableName: this.tableName,
          Item: toCreateOffer,
        })
        .promise();

      return {
        ...data,
        offerId: newOfferId,
        locationsTotal: 0,
      };
    } catch (err) {
      return {} as OfferEntity;
    }
  }
}
