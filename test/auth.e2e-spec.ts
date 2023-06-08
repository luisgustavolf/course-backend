import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('POST /signin', () => {
    it.only('should 404 for non existente user', async () => {
      await request(app.getHttpServer())
        .post('/auth/signin')
        .send({ username: 'asdasdas', password: 'asdasda' })
        .expect(404)
    })

    it('should return token for a valid user', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/signin')
        .send({ username: 'admin', password: 'admin' })
        .expect(200)

      expect(response.body.access_token).toBeTruthy()
    })
  })
})
