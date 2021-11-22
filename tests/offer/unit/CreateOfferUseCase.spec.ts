import { isUuid } from 'uuidv4';

import CreateOfferFactoryFake from '../factory/CreateOfferFactoryFake';

let createOfferUseCase: CreateOfferFactoryFake;

describe('Create Offer Use Case - unit test', () => {
  beforeEach(() => {
    createOfferUseCase = new CreateOfferFactoryFake();
  });

  it('should be able to create a new offer', async () => {
    const data = {
      name: 'Gotham Offer',
      brandId: '6f504858-4080-4056-a450-3a7c45b5501w',
    };

    const response = await createOfferUseCase.execute(data);
    expect(isUuid(response.offerId)).toBe(true);
    expect(response.locationsTotal).toBe(0);
  });
});
