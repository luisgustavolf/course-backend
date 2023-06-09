import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { SigninDto } from './dto/signin.input';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SigninResponseDto } from './dto/signin.response';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  @HttpCode(200)
  @ApiResponse({ status: '2XX', type: SigninResponseDto })
  async signin(@Body() body: SigninDto): Promise<SigninResponseDto> {
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
}
