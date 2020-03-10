import { NestFactory } from '@nestjs/core';
import { AppModule, Me } from './app.module';
import { AppService } from './app.service';
import { Subject } from 'rxjs';

const one = new Subject();
const two = new Subject();

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(one.asObservable(), two));
  const thing = await app.get(Me);

one.next('hi');
two.subscribe(d => console.log(new Date().toISOString() + d));

  console.log(thing);
  // await app.listen(3000);
}
bootstrap();
