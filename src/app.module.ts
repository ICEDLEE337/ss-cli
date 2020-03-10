import { Module, DynamicModule } from '@nestjs/common';
import { RoutingModule } from './routing/routing.module';
import { CatParameter } from './cat.parameter';
import { CatService } from './cat.service';

@Module({})
export class AppModule {
    static forRoot (inboundStream: any, outboundStream: any): DynamicModule {
        return {
            module: AppModule,
            providers: [CatParameter, CatService],
            imports: [RoutingModule.forRoot(inboundStream, outboundStream)],
            exports: [CatParameter, CatService]
        };
    }
}
