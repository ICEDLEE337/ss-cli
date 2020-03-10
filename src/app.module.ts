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
import { Subject, Observable } from 'rxjs';

@Injectable()
export class Me {
    name = 'lee';
    age = 39;
}

@Module({})
export class AppModule {
    static forRoot (inboundStream: Observable<any>, outboundStream: Subject<any>): DynamicModule {
        return {
            module: AppModule,
            imports: [RoutingModule.forRoot(inboundStream, outboundStream)],
            providers: [{provide: Me, useClass: Me}],
            exports: [Me]
        };
    }
}
