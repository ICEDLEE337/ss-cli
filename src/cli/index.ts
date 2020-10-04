#! /usr/bin/env node

import { exit, listen } from '@onivoro/server-process';
import { concatMap, map } from 'rxjs/operators';
import { deployToLocalstack } from './pdf/deploy-to-localstack';

export const bootstrap = () => {
  const { stdin, stdout } = listen();

  stdout
    .pipe(
      map((o: any) => console.log(o.toString()))
    )
    .subscribe();

  stdin
    .pipe(
      concatMap(deployToLocalstack),
    )
    .subscribe(stdout.next.bind(stdout), exit(1), exit(0));
}

bootstrap();