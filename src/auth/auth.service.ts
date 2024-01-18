// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/services/user.service'; // Assumed service for user management
import { OAuthProvider } from './oauth-provider.enum';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateOAuthLogin(profile: any, provider: OAuthProvider): Promise<string> {
    try {
      // Extract necessary information from profile
      const { id, firstName, lastName, email } = profile;

      console.log({profile});
      
      // Find or create the user in your database
      // The logic here depends on how you store users and how the provider gives you the details
      // For example, if using Mongoose:
      let user = await this.userService.findOneByProviderId(
        id,
        provider.toString(),
      );

    if (!user) {
        user = await this.userService.findOrCreateByProvider(
            id,
            provider.toString() ,
            email,
            firstName, lastName
        );
    }

      // Generate JWT token
      const payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstname,
        lastName: user.lastname,
      };
      const jwt = this.jwtService.sign(payload);

      return jwt;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
