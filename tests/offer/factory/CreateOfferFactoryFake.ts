import CreateOfferUseCase from '@domain/offer/useCases/CreateOfferUseCase';
import FakeOfferProvider from '@providers/dynamoDB/fake/FakeOfferProvider';

export default class CreateOfferFactoryFake extends CreateOfferUseCase {
  constructor() {
    super(new FakeOfferProvider());
  }
}
