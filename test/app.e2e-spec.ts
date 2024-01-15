import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .then((response) => {
        // Assuming your health check returns a JSON object with a 'status' key
        expect(response.body.status).toEqual('ok');
        
        // Additional assertions can be made based on the structure of your health check response
        // For example, if you're checking the health of your database:
        // expect(response.body.info.db.status).toEqual('up');
      });
  });
  
});
