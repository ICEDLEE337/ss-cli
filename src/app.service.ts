import { Injectable, Inject } from '@nestjs/common';
import { outToken } from './core/out.token';
import { inToken } from './core/in.token';
import { CatService } from './cat/cat.service';

@Injectable()
export class AppService {
    private readonly header = ['pid', process.pid, AppService.name, 'listening'].join(' :: ');

    constructor(
        @Inject(outToken) outbound: any,
        @Inject(inToken) inbound: any,
        private readonly catService: CatService
    ) {
        outbound.subscribe(this.message.bind(this));
        inbound.subscribe((input) => {
            outbound.next(this.catService.meow(input.split('\n')[0]));
        });
    }

    message (data: any) {
        console.log([this.header, data].join('\n'))
    }
}
