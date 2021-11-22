import { LocationEntity } from '@domain/location/entities/LocationEntity';

export type CreateLocationDTO = {
  address: string;
  brandId: string;
};

export default interface ILocationData {
  createLocation(data: CreateLocationDTO): Promise<LocationEntity>;
  getLocation(locationId: string): Promise<LocationEntity>;
}
