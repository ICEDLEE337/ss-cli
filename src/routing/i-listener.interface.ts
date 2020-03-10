import { AppEvents } from "./app-events.enum";
import { Subject } from "rxjs";

export interface IListener {
    respond: (eventData: any, outbound: Subject<any>) => void;
}