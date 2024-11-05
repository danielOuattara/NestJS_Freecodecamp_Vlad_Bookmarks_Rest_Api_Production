import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}
  login(authDto: AuthDto) {
    return { msg: 'login !' };
  }

  signup() {
    return { msg: 'signup !' };
  }
}
