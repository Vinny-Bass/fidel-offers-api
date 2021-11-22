export type LocationEntity = {
  locationId: string;
  address: string;
  brandId: string;
  hasOffers: boolean;
};

export type LocationOfferEntity = {
  locationId: string;
  offerId: string;
};
