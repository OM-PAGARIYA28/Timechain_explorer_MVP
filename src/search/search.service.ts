import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, timestamp } from 'rxjs';

@Injectable()
export class SearchService {
    constructor(private readonly httpService: HttpService) {}

    async searchByBlockHash(blockHash: string):Promise<any> {
        // Implement this method
        try {
            const response = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/block/hash/${blockHash}`)
            );
            return {
                blockHash:response.data.hash,
                blockHeight:response.data.height,
                timestamp: response.data.time,
                numberOfTransactions: response.data.txcount,
                size: response.data.size,
                transactions: response.data.tx,
            };
        } catch (error) {
            // Handle errors appropriately
            throw new Error(`Failed to fetch block by height: ${error.message}`);
        }
    }

    async searchByBlockHeight(blockHeight: number): Promise<any> {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/block/height/${blockHeight}`)
            );
            return {
                blockHash:response.data.hash,
                blockHeight:response.data.height,
                timestamp: response.data.time,
                numberOfTransactions: response.data.txcount,
                size: response.data.size,
                transactions: response.data.tx,
            };
        } catch (error) {
            // Handle errors appropriately
            throw new Error(`Failed to fetch block by height: ${error.message}`);
        }
    }
}
