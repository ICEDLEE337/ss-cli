// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


import { Module, DynamicModule, Injectable } from '@nestjs/common';
import { RoutingModule } from './routing/routing.module';

@Injectable()
export class Me {
    name = 'lee';
    age = 39;
}

@Module({})
export class AppModule {
    static forRoot (inboundStream: any, outboundStream: any): DynamicModule {
        return {
            module: AppModule,
            imports: [RoutingModule.forRoot(inboundStream, outboundStream)],
            providers: [{provide: Me, useClass: Me}],
            exports: [Me]
        };
    }
}
