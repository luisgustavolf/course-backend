import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SigninDto } from './dto/signin.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  @HttpCode(200)
  async signin(@Body() body: SigninDto) {
    try {
      return await this.authService.login(body.username, body.password)
    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
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
