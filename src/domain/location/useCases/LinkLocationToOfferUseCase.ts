import IUseCase from '@core/IUseCase';
import IOfferData from '@domain/offer/data/IOfferData';
import createError from 'http-errors';

import ILocationData, { LinkLocationToOfferDTO } from '../data/ILocationData';
import { LocationOfferEntity } from '../entities/LocationEntity';

export default abstract class LinkLocationToOfferUseCase
  implements IUseCase<LinkLocationToOfferDTO, LocationOfferEntity>
{
  constructor(
    private readonly dependencies: {
      offerProvider: IOfferData;
      locationProvider: ILocationData;
    },
  ) {}

  public async execute(data: LinkLocationToOfferDTO): Promise<LocationOfferEntity> {
    const location = await this.dependencies.locationProvider.getLocation(data.locationId);
    const offer = await this.dependencies.offerProvider.getOffer(data.offerId);

    if (!offer) {
      throw createError(400, 'Offer not founded');
    }

    if (!location) {
      throw createError(400, 'Location not founded');
    }

    return this.dependencies.locationProvider.linkLocationToOffer(data);
  }
}
