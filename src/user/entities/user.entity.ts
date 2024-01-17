// src/user/entities/user.entity.ts

import { Column, Model, Table } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, defaultValue: UUIDV4 })
  id: string;

  @Column({unique: true})
  email: string;

  @Column
  password: string;

  @Column({ allowNull: true })
  providerId: string; // ID provided by the OAuth provider

  @Column({ allowNull: true })
  provider: string; // Name of the OAuth provider ('facebook', 'google', etc.)

  @Column({ allowNull: true })
  firstname: string; 

  @Column({ allowNull: true })
  lastname: string; 

  // other fields like 'createdAt', 'updatedAt' can be added here
}
