import { Module, DynamicModule, Type, Provider } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProcessHandler } from './process.handler';
import { IListener } from './i-listener.interface';
import { CatParameter } from '../cat.parameter';
import { CatService } from '../cat.service';
type listeners = Provider<IListener>[];

@Module({})
export class RoutingModule {
    static forRoot(inbound: Observable<any>, outbound: Subject<any>): DynamicModule {
        const providers = [{ provide: ProcessHandler, useValue: new ProcessHandler() }, CatParameter, CatService];
        RoutingModule.listen(inbound, outbound, providers);
        return {
            module: RoutingModule,
            providers,
            exports: [CatService, CatParameter]
        };
    }

    static listen(inbound: Observable<any>, outbound: Subject<any>, providers: any) {
        inbound.pipe(
            tap(d => {
                providers.forEach((p: any) => {
                    p.useValue.respond(d, outbound);
                });
            })
        )
            .subscribe();
    }
}
