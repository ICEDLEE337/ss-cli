import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatParameter } from './cat.parameter';
const providers = exports = [CatService, CatParameter];
@Module({
    providers,
    exports
})
export class CatModule {}
