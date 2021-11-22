import { LinkLocationToOfferDTO } from '@domain/location/data/ILocationData';
import { LocationOfferEntity } from '@domain/location/entities/LocationEntity';

import LinkLocationToOfferFactory from '../factory/LinkLocationToOfferFactory';

export default class LinkLocationToOfferController {
  public async handle(data: LinkLocationToOfferDTO): Promise<LocationOfferEntity> {
    const linkLocationToOfferUseCase = new LinkLocationToOfferFactory();
    return linkLocationToOfferUseCase.execute(data);
  }
}
