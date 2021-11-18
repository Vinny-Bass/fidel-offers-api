import CreateLocationUseCase from '@domain/location/useCases/CreateLocationUseCase';
import FakeDynamoDBProvider from '@providers/dynamoDB/fake/FakeDynamoDBProvider';

export default class CreateLocationFactoryFake extends CreateLocationUseCase {
  constructor() {
    super(new FakeDynamoDBProvider());
  }
}
