#! /usr/bin/env node

import * as minimist from 'minimist';
import { exit, listen } from '@onivoro/server-process';
import { catchError, map, tap } from 'rxjs/operators';
import { s3Publish } from './s3/publish ';
import { from, of } from 'rxjs';
import { Handler } from './handler.interface';
const commands: { [alias: string]: Handler<any, any> } = {
  s3Publish,
};
const commandKeys = Object.keys(commands);

const { stdout } = listen();

stdout
  .pipe(
    map((o: any) => console.log(`OUT:: ${o.toString()}`))
  )
  .subscribe();

const args = minimist(process.argv.slice(2));
const noArgs = !args?._?.length;

if (noArgs) {
  help()
} else {
  const { debug } = args;
  const command = commands[args._[0]];
  command(args)
    .pipe(tap(() => { if (debug) { console.log(args); } }), catchError(e => of(e)))
    .subscribe(stdout.next.bind(stdout), exit(1), exit(0));
}

function help() {
  return from(commandKeys).subscribe(console.log.bind(console, 'COMMAND::'));
}