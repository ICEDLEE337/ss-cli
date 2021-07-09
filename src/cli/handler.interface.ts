import { Observable } from "rxjs";

export interface Handler<I,O> {
    (args: I): Observable<O>;
}
