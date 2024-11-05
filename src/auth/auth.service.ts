import { ForbiddenException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async signup(authDto: AuthDto) {
    // gen. password
    const password = await argon.hash(authDto.password);
    // save
    try {
      const user = await this.databaseService.user.create({
        data: {
          email: authDto.email,
          password,
        },
      });

      // return the saved user
      delete user.password;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Duplicate email found, try another email address',
          );
        }
      } else {
      }
    }
  }
  login(authDto: AuthDto) {
    return { msg: 'login !' };
  }
}
