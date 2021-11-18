import { isUuid } from 'uuidv4';

import CreateLocationFactoryFake from '../factory/CreateLocationFactoryFake';

let createLocationUseCase: CreateLocationFactoryFake;

describe('Create location Use Case - unit test', () => {
  beforeEach(() => {
    createLocationUseCase = new CreateLocationFactoryFake();
  });

  it('should be able to create a new location', async () => {
    const data = {
      address: 'Wayne mansion, Gotham City',
      brandId: '6f504858-4080-4056-a450-3a7c45b5501w',
    };

    const response = await createLocationUseCase.execute(data);
    expect(isUuid(response.locationId)).toBe(true);
    expect(response.hasOffers).toBe(false);
  });
});
