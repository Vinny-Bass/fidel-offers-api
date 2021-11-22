import ILocationData, {
  CreateLocationDTO,
  LinkLocationToOfferDTO,
} from '@domain/location/data/ILocationData';
import { LocationEntity, LocationOfferEntity } from '@domain/location/entities/LocationEntity';
import { uuid } from 'uuidv4';

export default class FakeLocationProvider implements ILocationData {
  private locations: LocationEntity[] = [
    {
      locationId: 'test_id',
      brandId: 'Test brand id',
      address: 'Test address',
      hasOffers: false,
    },
  ];

  public async getLocation(locationId: string): Promise<LocationEntity> {
    const location = this.locations.find(location => location.locationId === locationId);
    return location || ({} as LocationEntity);
  }

  public async createLocation(data: CreateLocationDTO): Promise<LocationEntity> {
    const newLocation: LocationEntity = {
      ...data,
      locationId: uuid(),
      hasOffers: false,
    };

    return newLocation;
  }

  public async linkLocationToOffer(data: LinkLocationToOfferDTO): Promise<LocationOfferEntity> {
    return data;
  }
}
