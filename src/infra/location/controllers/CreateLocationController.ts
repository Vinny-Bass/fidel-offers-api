import { CreateLocationDTO } from '@domain/location/data/ILocationData';
import { LocationEntity } from '@domain/location/entities/LocationEntity';

import CreateLocationFactory from '../factory/CreateLocationFactory';

export default class CreateLocationController {
  public async handle(data: CreateLocationDTO): Promise<LocationEntity> {
    const createLocationUseCase = new CreateLocationFactory();
    return createLocationUseCase.execute(data);
  }
}
