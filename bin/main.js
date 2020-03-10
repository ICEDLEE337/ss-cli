"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./src/app/app.module");
const core_1 = require("@nestjs/core");
const rxjs_1 = require("rxjs");
const inboundStream = new rxjs_1.Subject();
const outboundStream = new rxjs_1.Subject();
async function bootstrap() {
    await core_1.NestFactory.createApplicationContext(app_module_1.AppModule.forRoot(inboundStream, outboundStream), { logger: console });
    outboundStream.subscribe(d => console.log(d));
    inboundStream.next('hi');
}
bootstrap();
