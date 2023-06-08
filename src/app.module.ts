import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [PrismaService, AppService, UsersService],
})
export class AppModule {}
