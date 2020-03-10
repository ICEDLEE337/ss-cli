import { Module, DynamicModule, Type, Provider } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProcessHandler } from './process.handler';
import { IListener } from './i-listener.interface';
type listeners = Provider<IListener>[];

@Module({})
export class RoutingModule {
    static forRoot(inbound: Observable<any>, outbound: Subject<any>): DynamicModule {
        const providers = [{ provide: ProcessHandler, useValue: new ProcessHandler() }];
        RoutingModule.listen(inbound, outbound, providers);
        return {
            module: RoutingModule,
            providers
        };
    }

    static listen(inbound: Observable<any>, outbound: Subject<any>, providers: any) {
        inbound.pipe(
            tap(d => console.log('in router', d)),
            tap(d => {
                providers.forEach((p: any) => {
                    p.useValue.respond(d.data, outbound);
                });
            })
        )
            .subscribe();
    }
}
