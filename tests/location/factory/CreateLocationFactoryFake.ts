import CreateLocationUseCase from '@domain/location/useCases/CreateLocationUseCase';
import FakeLocationProvider from '@providers/dynamoDB/fake/FakeLocationProvider';

export default class CreateLocationFactoryFake extends CreateLocationUseCase {
  constructor() {
    super(new FakeLocationProvider());
  }
}
