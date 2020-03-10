import { NestFactory } from '@nestjs/core';
import { AppModule, Me } from './app.module';
import { AppService } from './app.service';
import { Subject } from 'rxjs';

const one = new Subject();
const two = new Subject();

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(one.asObservable(), two));

  // todo: here to load module
  const thing = await app.get(Me);
  console.log(thing);

  two.subscribe(d => console.log(new Date().toISOString() + d));

  process.stdin.on('data', d => d.toString().trim() === 'exit' ? process.exit(0) : one.next(d.toString()));
}
bootstrap();
