// src/user/services/user.service.ts

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    return user.save();
  }

  // Additional methods like 'findOne', 'update', etc., can be implemented here.
}
