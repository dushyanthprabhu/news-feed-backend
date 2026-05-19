import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { NewsFeedService } from './news-feed.service';
import { FetchNewsFeedDto } from './dto/fetch-news-feed.dto';

@Controller('news-feed')
export class NewsFeedController {
  constructor(private readonly newsFeedService: NewsFeedService) { }

  @Post()
  @HttpCode(200)
  getNewsFeed(@Body() fetchNewsFeedDto: FetchNewsFeedDto) {
    return this.newsFeedService.getNews(fetchNewsFeedDto);
  }

}
