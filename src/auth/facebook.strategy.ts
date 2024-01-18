// facebook.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.FACEBOOK_APP_ID, // from environment variables or config
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      scope: 'email',
      profileFields: ['id', 'emails', 'name'], // Adjust fields as needed
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile, done: Function): Promise<any> {
    const { name, emails } = profile;
    const user = {
      email: emails ? emails[0].value : null,
      firstName: name ? name.givenName : null,
      lastName: name ? name.familyName : null,
      accessToken
    };
    done(null, user);
  }
}
