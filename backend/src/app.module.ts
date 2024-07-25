import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [SearchModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
