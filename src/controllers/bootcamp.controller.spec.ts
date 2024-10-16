import { Test, TestingModule } from '@nestjs/testing';
import { BootcampController } from './bootcamps.controller';

describe('BootcampController', () => {
  let controller: BootcampController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BootcampController],
    }).compile();

    controller = module.get<BootcampController>(BootcampController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
