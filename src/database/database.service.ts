import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:12341234@localhost:5434/fcc_vlad_bookmark?schema=public',
        },
      },
    });
  }
}
