import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { msg: 'login !' };
  }

  signup() {
    return { msg: 'signup !' };
  }
}
