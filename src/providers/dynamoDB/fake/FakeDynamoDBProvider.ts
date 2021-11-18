import ILocationData, { CreateLocationDTO } from '@domain/location/data/ILocationData';
import { LocationEntity } from '@domain/location/entities/LocationEntity';
import { uuid } from 'uuidv4';

export default class FakeDynamoDBProvider implements ILocationData {
  public async createLocation(data: CreateLocationDTO): Promise<LocationEntity> {
    const newLocation: LocationEntity = {
      ...data,
      locationId: uuid(),
      hasOffers: false,
    };

    return newLocation;
  }
}
