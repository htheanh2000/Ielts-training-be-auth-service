import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/services/user.service';
import { FacebookStrategy } from './facebook.strategy'; // Import the FacebookStrategy
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'jllgshllWEUJHGHYJkjsfjds90', // Replace with your actual secret key
      signOptions: { expiresIn: '1d' }, // Adjust the expiration as needed
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService, UserService, FacebookStrategy], // Add FacebookStrategy to the providers
})
export class AuthModule {}
