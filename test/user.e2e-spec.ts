import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module'; // Import your AppModule

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const uniqueEmail = `${Math.random().toString(36).substring(2, 15)}@example.com`;

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ 
        email: uniqueEmail, 
        password: 'password123' 
      })
      .expect(HttpStatus.CREATED)
      .then((response) => {
        // Perform your assertions here
        expect(response.body).toHaveProperty('id');
        expect(response.body.email).toEqual(uniqueEmail);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
