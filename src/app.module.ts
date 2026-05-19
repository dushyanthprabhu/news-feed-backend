import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), NewsFeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
