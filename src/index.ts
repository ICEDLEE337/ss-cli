#! /usr/bin/env node

import { exit, listen } from '@onivoro/server-process';
import { map, take } from 'rxjs/operators';

export const bootstrap = () => {
  const { stdin, stdout } = listen();
  let i = 1;

  stdout
    .pipe(map((o: any) => console.log(o.toString())))
    .subscribe();

  stdin
    .pipe(take(3), map((o: any) => o.toString() + `${i++}`))
    .subscribe(stdout.next.bind(stdout), exit(1), exit(0));
}

bootstrap();