import { Module, DynamicModule } from '@nestjs/common';
import { RoutingModule } from '../../src/routing/routing.module';

@Module({})
export class AppModule {
    static forRoot (inboundStream: any, outboundStream: any): DynamicModule {
        return {
            module: AppModule,
            imports: [RoutingModule.forRoot(inboundStream, outboundStream)]
        };
    }
}