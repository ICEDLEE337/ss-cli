import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Subject } from 'rxjs';
import { CatParameter } from './cat.parameter';
import { CatService } from './cat.service';

const one = new Subject();
const two = new Subject();

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(one.asObservable(), two));

  console.log(new CatParameter().value);
  const s = await app.get(CatService);
  console.log(s.meow());

  two.subscribe(d => console.log(d));

  process.stdin.on('data', d => d.toString().trim() === 'exit' ? process.exit(0) : one.next(d.toString()));
}
bootstrap();
