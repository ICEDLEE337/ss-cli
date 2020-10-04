#! /usr/bin/env node

import * as minimist from 'minimist';
import { exit, listen } from '@onivoro/server-process';
import { map } from 'rxjs/operators';
import { deployToLocalstack } from './pdf/deploy-to-localstack';

const { stdout } = listen();

stdout
  .pipe(
    map((o: any) => console.log(o.toString()))
  )
  .subscribe();

deployToLocalstack(minimist(process.argv.slice(2)))
  .subscribe(stdout.next.bind(stdout), exit(1), exit(0));
