import { isUuid } from 'uuidv4';

import LinkLocationToOfferFactoryFake from '../factory/LinkLocationToOffer';

let linkLocationToOfferUseCase: LinkLocationToOfferFactoryFake;

describe('Link location to offer Use Case - unit test', () => {
  beforeEach(() => {
    linkLocationToOfferUseCase = new LinkLocationToOfferFactoryFake();
  });

  it('should be able to link a location to an offer', async () => {
    const data = {
      locationId: 'test_id',
      offerId: 'test_id',
    };

    const response = await linkLocationToOfferUseCase.execute(data);
    expect(response.locationId).toBe('test_id');
    expect(response.offerId).toBe('test_id');
  });
});
