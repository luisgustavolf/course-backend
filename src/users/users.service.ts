import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { compare } from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async find(username: string, password: string) {
    const user = await this.prisma.user.findFirst({ 
      where: { 
        username,
      }});

    const hasSamePass = await compare(password, user.password)
    if (hasSamePass)
      return user
    return undefined
  }
}