import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SigninDto } from './dto/signin.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: SigninDto) {
    return this.authService.login(body.username, body.password)
  }

  @UseGuards(JwtAuthGuard)
  @Get('authed')
  async authed() {
    return { status: 'ok' }
  }

  @Get('unauthed')
  async unauthed() {
    return { status: 'ok' }
  }
}
