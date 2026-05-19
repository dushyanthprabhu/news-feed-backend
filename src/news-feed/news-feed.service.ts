import { Injectable } from '@nestjs/common';
import { FetchNewsFeedDto } from './dto/fetch-news-feed.dto';
import { HttpRequestService } from 'src/common/http-request.service';

@Injectable()
export class NewsFeedService {
  constructor(private httpRequest: HttpRequestService) { }

  async getNews(fetchNewsFeedDto: FetchNewsFeedDto) {
    const res = await this.httpRequest.getNews(fetchNewsFeedDto.endpoint, fetchNewsFeedDto.params);
    return res;
  }
}
