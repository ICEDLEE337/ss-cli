// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


import { Module, DynamicModule } from '@nestjs/common';
import { RoutingModule } from './routing/routing.module';

@Module({})
export class AppModule {
    static forRoot (inboundStream: any, outboundStream: any): DynamicModule {
        return {
            module: AppModule,
            imports: [RoutingModule.forRoot(inboundStream, outboundStream)]
        };
    }
}
