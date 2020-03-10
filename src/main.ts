import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Subject } from 'rxjs';

const one = new Subject();
const two = new Subject();

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(one.asObservable(), two));

  two.subscribe(d => console.log(d));

  process.stdin.on('data', d => d.toString().trim() === 'exit' ? process.exit(0) : one.next(d.toString()));
}
bootstrap();
