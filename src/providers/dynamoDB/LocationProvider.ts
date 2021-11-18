import ILocationData, { CreateLocationDTO } from '@domain/location/data/ILocationData';
import { LocationEntity } from '@domain/location/entities/LocationEntity';
import { uuid } from 'uuidv4';

import DynamoDBClient from './DynamoDBClient';

export default class LocationProvider extends DynamoDBClient implements ILocationData {
  private tableName = 'Locations';

  public async createLocation(data: CreateLocationDTO): Promise<LocationEntity> {
    const toCreateLocation: LocationEntity = {
      ...data,
      locationId: uuid(),
      hasOffers: false,
    };

    try {
      await this.client
        .put({
          TableName: this.tableName,
          Item: toCreateLocation,
        })
        .promise();

      return toCreateLocation;
    } catch (err) {
      return {} as LocationEntity;
    }
  }
}
