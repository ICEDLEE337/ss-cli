import { AppModule } from './srcOg/app/app.module';
import { NestFactory } from '@nestjs/core';
import { Subject } from 'rxjs';

const inboundStream = new Subject();
const outboundStream = new Subject();
async function bootstrap() {
    console.log('bs');
    await NestFactory.createApplicationContext(AppModule.forRoot(inboundStream, outboundStream), { logger: console });
    outboundStream.subscribe(d => console.log(d))
    inboundStream.next('hi');
}

bootstrap();