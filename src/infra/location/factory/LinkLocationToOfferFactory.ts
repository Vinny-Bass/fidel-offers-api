import LinkLocationToOfferUseCase from '@domain/location/useCases/LinkLocationToOfferUseCase';
import LocationProvider from '@providers/dynamoDB/LocationProvider';
import OfferProvider from '@providers/dynamoDB/OfferProvider';

export default class LinkLocationToOfferFactory extends LinkLocationToOfferUseCase {
  constructor() {
    super({
      locationProvider: new LocationProvider(),
      offerProvider: new OfferProvider(),
    });
  }
}
