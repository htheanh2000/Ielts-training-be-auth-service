// src/user/services/user.service.spec.ts

import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entities/user.entity';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn().mockImplementation((dto) => Promise.resolve({
              ...dto,
              id: 1, // Mock an id or other properties as needed
            })),
            // Mock other methods as needed
          },
        },
      ],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    userRepository = moduleRef.get<UserRepository>(UserRepository);
  });

  describe('create', () => {
    it('should create and return a user', async () => {
      const userDto = { email: 'test@example.com', password: 'password123' };
      jest.spyOn(userRepository, 'create').mockResolvedValue({
        ...userDto,
        id: 1,
      } as User); // Explicitly cast userDto to the type 'User'

      // Add the User model to the Sequelize instance
      const sequelizeInstance = moduleRef.get<Sequelize>(Sequelize);
      sequelizeInstance.addModels([User]);

      const result = await userService.create(userDto);
      
      expect(result).toHaveProperty('id', 1);
      expect(result.email).toEqual(userDto.email);
      expect(userRepository.create).toHaveBeenCalledWith(userDto);
    });
  });

  // Add more tests here to cover other functionalities of UserService
});
