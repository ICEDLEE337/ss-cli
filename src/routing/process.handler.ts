import { Injectable } from '@nestjs/common';
import { IListener } from './i-listener.interface'
import { AppEvents } from './app-events.enum';

@Injectable()
export class ProcessHandler implements IListener {
    event: AppEvents = AppEvents.cpu;

    respond(eventData: any, outbound: any): void {
        this.respondInternal(eventData, outbound);
    }

    private respondInternal (eventData: any, outbound: any) {
        outbound.next(`${ProcessHandler.name}<<${eventData}`);
    }
}
