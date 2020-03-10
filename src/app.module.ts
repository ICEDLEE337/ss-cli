import { Module, DynamicModule } from '@nestjs/common';
import { RoutingModule } from './routing/routing.module';
import { AppService } from './app.service';

@Module({
  providers: [AppService]
})
export class AppModule {
    static forRoot (inboundStream: any, outboundStream: any): DynamicModule {
        return {
            module: AppModule,
            imports: [RoutingModule.forRoot(inboundStream, outboundStream)]
        };
    }
}
