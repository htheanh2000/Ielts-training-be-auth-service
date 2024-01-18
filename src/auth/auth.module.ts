import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { FacebookStrategy } from './facebook.strategy'; // Import the FacebookStrategy
@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService, FacebookStrategy], // Add FacebookStrategy to the providers
})
export class AuthModule {}
