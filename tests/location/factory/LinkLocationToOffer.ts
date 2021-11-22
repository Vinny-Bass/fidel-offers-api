import LinkLocationToOfferUseCase from '@domain/location/useCases/LinkLocationToOfferUseCase';
import FakeLocationProvider from '@providers/dynamoDB/fake/FakeLocationProvider';
import FakeOfferProvider from '@providers/dynamoDB/fake/FakeOfferProvider';

export default class LinkLocationToOfferFactoryFake extends LinkLocationToOfferUseCase {
  constructor() {
    super({
      locationProvider: new FakeLocationProvider(),
      offerProvider: new FakeOfferProvider(),
    });
  }
}
