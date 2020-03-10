import { Module } from '@nestjs/common';
import { Arg } from './arg.decorator';
import { Parameter } from './parameter.class';
import { outToken } from './out.token';
import { inToken } from './in.token';

@Module({
    exports: [Arg, Parameter, outToken, inToken]
})
export class CoreModule {}