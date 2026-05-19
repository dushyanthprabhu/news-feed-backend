import { Module } from '@nestjs/common';
import { NewsFeedService } from './news-feed.service';
import { NewsFeedController } from './news-feed.controller';
import { CommonModule } from 'src/common/common-module';

@Module({
  imports: [CommonModule],
  controllers: [NewsFeedController],
  providers: [NewsFeedService],
})
export class NewsFeedModule { }
