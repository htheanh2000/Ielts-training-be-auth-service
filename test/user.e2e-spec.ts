// test/user.e2e-spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('UserController (e2e)', () => {
  let app:
  INestApplication;

beforeEach(async () => {
const moduleFixture: TestingModule = await Test.createTestingModule({
imports: [AppModule],
}).compile();
app = moduleFixture.createNestApplication();
await app.init();
});

it('/users (POST) - success', () => {
return request(app.getHttpServer())
.post('/users')
.send({ email: 'test@example.com', password: 'password123' })
.expect(HttpStatus.CREATED)
.expect({
// Expected response object
// This should reflect the actual response you expect from your API
});
});

it('/users (POST) - fail (invalid data)', () => {
return request(app.getHttpServer())
.post('/users')
.send({ email: 'invalid-email', password: 'pass' }) // Invalid email and short password
.expect(HttpStatus.BAD_REQUEST);
// Optionally, check the structure of the response
});

// Add more tests as needed

afterAll(async () => {
await app.close();
});
});