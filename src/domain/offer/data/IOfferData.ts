import { OfferEntity } from '@domain/offer/entities/OfferEntity';

export type CreateOfferDTO = {
  name: string;
  brandId: string;
};

export default interface IOfferData {
  createOffer(data: CreateOfferDTO): Promise<OfferEntity>;
  getOffer(offerId: string): Promise<OfferEntity>;
}
