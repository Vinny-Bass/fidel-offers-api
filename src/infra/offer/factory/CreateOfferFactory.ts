import CreateOfferUseCase from '@domain/offer/useCases/CreateOfferUseCase';
import OfferProvider from '@providers/dynamoDB/OfferProvider';

export default class CreateOfferFactory extends CreateOfferUseCase {
  constructor() {
    super(new OfferProvider());
  }
}
