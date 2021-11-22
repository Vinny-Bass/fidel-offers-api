import { LocationEntity, LocationOfferEntity } from '@domain/location/entities/LocationEntity';

export type CreateLocationDTO = {
  address: string;
  brandId: string;
};

export type LinkLocationToOfferDTO = {
  locationId: string;
  offerId: string;
};

export default interface ILocationData {
  createLocation(data: CreateLocationDTO): Promise<LocationEntity>;
  getLocation(locationId: string): Promise<LocationEntity>;
  linkLocationToOffer(data: LinkLocationToOfferDTO): Promise<LocationOfferEntity>;
}
