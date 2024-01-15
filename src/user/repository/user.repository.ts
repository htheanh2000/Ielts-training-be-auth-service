// src/user/repository/user.repository.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(email: string, password: string): Promise<User> {
    const user = new this.userModel({ email, password });
    await user.save();
    return user;
  }

  // Add more Sequelize-specific methods as needed
}
