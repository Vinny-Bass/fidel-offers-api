import IUseCase from '@core/IUseCase';

import IOfferData, { CreateOfferDTO } from '../data/IOfferData';
import { OfferEntity } from '../entities/OfferEntity';

export default abstract class CreateOfferUseCase implements IUseCase<CreateOfferDTO, OfferEntity> {
  constructor(private readonly offerProvider: IOfferData) {}

  public async execute(data: CreateOfferDTO): Promise<OfferEntity> {
    return this.offerProvider.createOffer(data);
  }
}
