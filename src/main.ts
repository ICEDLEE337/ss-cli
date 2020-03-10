import { NestFactory } from '@nestjs/core';
import { AppModule, Me } from './app.module';
import { AppService } from './app.service';
import { Subject } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(new Subject().asObservable(), new Subject()));
  const thing = await app.get(Me);
  console.log(thing);
  // await app.listen(3000);
}
bootstrap();
