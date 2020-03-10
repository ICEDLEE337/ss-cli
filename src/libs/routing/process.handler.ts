import { Injectable } from '@nestjs/common';
import { IListener } from './i-listener.interface'
import { AppEvents } from './app-events.enum';

@Injectable()
export class ProcessHandler implements IListener {
    event: AppEvents = AppEvents.cpu;
    // constructor(private readonly inbound: any, private readonly outbound: any) {

    // }
    respond(eventData: any, outbound: any): void {
        outbound.next(eventData + ' response');
    }
}
