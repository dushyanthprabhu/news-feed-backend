import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsFeedService } from './news-feed.service';
import { FetchNewsFeedDto } from './dto/fetch-news-feed.dto';

@Controller('news-feed')
export class NewsFeedController {
  constructor(private readonly newsFeedService: NewsFeedService) { }

  @Post()
  create(@Body() fetchNewsFeedDto: FetchNewsFeedDto) {
    return this.newsFeedService.getNews(fetchNewsFeedDto);
  }

}
