import ILocationData, { CreateLocationDTO } from '@domain/location/data/ILocationData';
import { LocationEntity } from '@domain/location/entities/LocationEntity';
import { uuid } from 'uuidv4';

import DynamoDBClient from './DynamoDBClient';

export default class LocationProvider extends DynamoDBClient implements ILocationData {
  private tableName = 'LocationsOffers';

  public async getLocation(locationId: string): Promise<LocationEntity> {
    const location = await this.client
      .get({
        TableName: this.tableName,
        Key: {
          pk: `location-${locationId}`,
        },
      })
      .promise();

    return location.Item as LocationEntity;
  }

  public async createLocation(data: CreateLocationDTO): Promise<LocationEntity> {
    const newLocationId = uuid();
    const toCreateLocation = {
      pk: `location-${newLocationId}`,
      sk: `location-${newLocationId}`,
      brandId: data.brandId,
      address: data.address,
      hasOffers: false,
    };

    try {
      await this.client
        .put({
          TableName: this.tableName,
          Item: toCreateLocation,
        })
        .promise();

      return {
        ...data,
        locationId: newLocationId,
        hasOffers: false,
      };
    } catch (err) {
      return {} as LocationEntity;
    }
  }
}
