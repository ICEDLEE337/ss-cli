import { Injectable, Inject } from '@nestjs/common';
import { outToken } from './core/out.token';
import { inToken } from './core/in.token';

@Injectable()
export class AppService {
    constructor(@Inject(outToken) outbound: any, @Inject(inToken) inbound: any) {
        outbound.subscribe(d => console.log([AppService.name, d].join(':out:')));
        inbound.subscribe(d => {
            const msg = [AppService.name, d, 'RES', new Date().toISOString()].join(':in:');
            outbound.next(msg);
        });
    }
}
