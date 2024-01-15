// src/user/entities/user.entity.ts

import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  email: string;

  @Column
  password: string;

  // other fields like 'createdAt', 'updatedAt' can be added here
}
