import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/signin.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(username: string, password: string) {
    const user = await this.usersService.find(username, password)

    if (!user) {
      throw new BadRequestException('user not found')
    }

    const payload = { userId: await user.id }

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}