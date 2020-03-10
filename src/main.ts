import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Subject } from 'rxjs';
import { CatParameter } from './routing/cat.parameter';

const one = new Subject();
const two = new Subject();

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(one.asObservable(), two));

  console.log(new CatParameter().value);

  two.subscribe(d => console.log(d));

  process.stdin.on('data', d => d.toString().trim() === 'exit' ? process.exit(0) : one.next(d.toString()));
}
bootstrap();
