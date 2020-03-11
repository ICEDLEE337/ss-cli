import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatCountParameter } from './cat-count.parameter';
import { CatColorParameter } from './cat-color.parameter';
const providers = [CatService, CatCountParameter, CatColorParameter];
@Module({
    providers,
    exports: [...providers]
})
export class CatModule {}
