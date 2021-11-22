import { CreateOfferDTO } from '@domain/offer/data/IOfferData';
import { OfferEntity } from '@domain/offer/entities/OfferEntity';

import CreateOfferFactory from '../factory/CreateOfferFactory';

export default class CreateOfferController {
  public async handle(data: CreateOfferDTO): Promise<OfferEntity> {
    const createOfferUseCase = new CreateOfferFactory();
    return createOfferUseCase.execute(data);
  }
}
