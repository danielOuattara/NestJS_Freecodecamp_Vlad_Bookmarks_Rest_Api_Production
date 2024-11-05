import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  welcome() {
    return 'Welcome';
  }

  @Post('login')
  login(@Body() authDto: AuthDto) {
    console.log(authDto);
    return this.authService.login();
  }

  @Post('signup')
  signup() {
    return 'signup !';
  }
}
