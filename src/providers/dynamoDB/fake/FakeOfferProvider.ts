import IOfferData, { CreateOfferDTO } from '@domain/offer/data/IOfferData';
import { OfferEntity } from '@domain/offer/entities/OfferEntity';
import { uuid } from 'uuidv4';

export default class FakeOfferProvider implements IOfferData {
  private offers: OfferEntity[] = [
    {
      name: 'Test offer 1',
      brandId: 'Test brand id',
      offerId: 'test_id',
      locationsTotal: 0,
    },
  ];

  public async getOffer(offerId: string): Promise<OfferEntity> {
    const offer = this.offers.find(offer => offer.offerId === offerId);
    return offer || ({} as OfferEntity);
  }

  public async createOffer(data: CreateOfferDTO): Promise<OfferEntity> {
    const newOffer: OfferEntity = {
      ...data,
      offerId: uuid(),
      locationsTotal: 0,
    };

    return newOffer;
  }
}
