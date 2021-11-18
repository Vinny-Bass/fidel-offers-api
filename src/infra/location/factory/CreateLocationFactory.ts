import CreateLocationUseCase from '@domain/location/useCases/CreateLocationUseCase';
import LocationProvider from '@providers/dynamoDB/LocationProvider';

export default class CreateLocationFactory extends CreateLocationUseCase {
  constructor() {
    super(new LocationProvider());
  }
}
