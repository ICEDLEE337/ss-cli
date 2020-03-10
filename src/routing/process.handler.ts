import { Injectable, Inject } from '@nestjs/common';
import { IListener } from './i-listener.interface'
import { inToken } from 'src/core/in.token';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { outToken } from 'src/core/out.token';

@Injectable()
export class ProcessHandler implements IListener {

    constructor(
        @Inject(inToken) private readonly inbound: Observable<any>,
        @Inject(outToken) private readonly outbound: Subject<any>) {
        inbound.pipe(tap(d => console.log(`${ProcessHandler.name}::`))).subscribe(d => this.respondInternal(d));
    }

    respond(eventData: any): void {
        this.respondInternal(eventData);
    }

    private respondInternal(eventData: any) {
        this.outbound.next(`${ProcessHandler.name}<<${eventData}`);
    }
}
