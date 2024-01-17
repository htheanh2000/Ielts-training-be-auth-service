import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { TokenDto } from './token.dto'; // Import the TokenDto class from the appropriate module
import { OAuthProvider } from './oauth-provider.enum';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  @ApiOperation({ summary: 'Initiate Facebook OAuth2 login' })
  @ApiResponse({
    status: 200,
    description: 'Redirect to Facebook for authentication.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async facebookLogin(): Promise<any> {
    // initiates the Facebook OAuth2 login flow
  }

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  @ApiOperation({ summary: 'Handle Facebook OAuth2 callback' })
  @ApiResponse({
    status: 200,
    description: 'User information with JWT token',
    type: TokenDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async facebookLoginCallback(@Req() req): Promise<any> {
    // handles the Facebook OAuth2 callback
    const jwt: string = await this.authService.validateOAuthLogin(
      req.user,
      OAuthProvider.FACEBOOK,
    );
    return { jwt };
  }
}
