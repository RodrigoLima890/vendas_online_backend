import { Test, TestingModule } from '@nestjs/testing';
import { TypeUserService } from './type_user.service';

describe('TypeUserService', () => {
  let service: TypeUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeUserService],
    }).compile();

    service = module.get<TypeUserService>(TypeUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
