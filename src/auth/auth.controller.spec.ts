import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthModule } from './auth.module';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('POST /signin', () => {
    it('should 404 for non existente user', async () => {
      const response = controller.signin({ username: 'a', password: 'b' })
      await expect(response).rejects.toThrow()
    })

    it('should 404 for non existente user', async () => {
      const response = await controller.signin({ username: 'admin', password: 'admin' })
      expect(response.access_token).toBeTruthy()
    })
  })
});
