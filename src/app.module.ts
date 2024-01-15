import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User], // Add all your models here
      autoLoadModels: true, // Auto load models
      synchronize: true, // Synchronize models with database
    }),
    UserModule,
    // ... other modules
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
