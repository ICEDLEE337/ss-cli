import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatParameter } from './cat.parameter';
const providers = [CatService, CatParameter];
@Module({
    providers,
    exports: [...providers]
})
export class CatModule {}
