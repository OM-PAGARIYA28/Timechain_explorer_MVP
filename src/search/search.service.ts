import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SearchService {
    constructor(private readonly httpService: HttpService) {}

    async searchByBlockHash() {
        // Implement this method
    }

    async searchByBlockHeight(blockHeight: number): Promise<any> {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/block/height/${blockHeight}`)
            );
            return response.data;
        } catch (error) {
            // Handle errors appropriately
            throw new Error(`Failed to fetch block by height: ${error.message}`);
        }
    }
}
