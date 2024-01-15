// src/user/services/user.service.ts

import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
 
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;
    // Check if the user already exists in the db
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('User already exists');

    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save the new user
    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    return user.save();
  }

  // Find a user by ID
  async findOne(id: number): Promise<User> {
    const user = await User.findOne({where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Update a user
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    // You can add more fields to update as per your UpdateUserDto
    if (updateUserDto.email) user.email = updateUserDto.email;
    if (updateUserDto.password) user.password = await bcrypt.hash(updateUserDto.password, 10);

    await user.save();
    return user;
  }

  // Delete a user
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    if(!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await user.destroy();
  }

  // List all users (optional)
  async findAll(): Promise<User[]> {
    return await User.find();
  }
  
  // Additional methods like 'findOne', 'update', etc., can be implemented here.
}
