// facebook.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:5000/auth/facebook/callback',
      scope: 'email',
      profileFields: ['id', 'emails', 'name'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile, done: Function): Promise<any> {
    const { id, name, emails } = profile;
    const user = {
      id: id, // Retrieve and assign the Facebook `id` as the providerId
      email: emails ? emails[0].value : null,
      firstName: name ? name.givenName : null,
      lastName: name ? name.familyName : null,
      accessToken,
    };
    done(null, user);
  }
}
