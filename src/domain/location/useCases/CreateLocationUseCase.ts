import IUseCase from '@core/IUseCase';

import ILocationData, { CreateLocationDTO } from '../data/ILocationData';
import { LocationEntity } from '../entities/LocationEntity';

export default abstract class CreateLocationUseCase
  implements IUseCase<CreateLocationDTO, LocationEntity>
{
  constructor(private readonly locationDataProvider: ILocationData) {}

  public async execute(data: CreateLocationDTO): Promise<LocationEntity> {
    return this.locationDataProvider.createLocation(data);
  }
}
