import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpRequestService {
    constructor(private http: HttpService) { }

    async getNews(endpoint: string, params?: Record<string, any>) {
        const response = await firstValueFrom(
            this.http.get(`https://newsapi.org/v2/${endpoint}`, {
                params: {
                    ...params,
                    apiKey: process.env.NEWS_API_KEY,
                },
            }),
        );

        return response.data;
    }
}