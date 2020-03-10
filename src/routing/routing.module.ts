import { Module, DynamicModule, Type, Provider, OnModuleInit } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { inToken } from 'src/core/in.token';
import { outToken } from 'src/core/out.token';

@Module({})
export class RoutingModule implements OnModuleInit {
    onModuleInit() {
        console.log('on module init => routing')
    }
    static forRoot(inbound: Observable<any>, outbound: Subject<any>): DynamicModule {
        const ioStreams = [
            { provide: inToken, useValue: inbound },
            { provide: outToken, useValue: outbound }];
        return {
            module: RoutingModule,
            providers: ioStreams,
            exports: ioStreams
        };
    }
}
