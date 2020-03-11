import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatCount } from './cat-count.parameter';
import { CatColor } from './cat-color.parameter';
import { CatDob } from './cat-dob.parameter';
const providers = [CatService, CatCount, CatColor, CatDob];
@Module({
    providers,
    exports: [...providers]
})
export class CatModule {}
