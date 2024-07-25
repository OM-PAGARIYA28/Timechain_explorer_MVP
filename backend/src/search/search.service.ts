import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, timestamp } from 'rxjs';

@Injectable()
export class SearchService {
    constructor(private readonly httpService: HttpService) {}

    cleanData(data: any): any {
        return {
            blockHash: data.blockhash,
            blockHeight: data.height,
            timestamp: data.time,
            numberOfTransactions: data.txcount,
            size: data.size,
            txs: data.tx,
        };
    }

    async searchByBlockHash(blockHash: string):Promise<any> {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/block/hash/${blockHash}`)
            );
            return this.cleanData(response.data);
        } catch (error) {
            throw new Error(`Failed to fetch block by height: ${error.message}`);
        }
    }

    async searchByBlockHeight(blockHeight: number): Promise<any> {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/block/height/${blockHeight}`)
            );
            return this.cleanData(response.data);
        } catch (error) {
            throw new Error(`Failed to fetch block by height: ${error.message}`);
        }
    }

    async searchByTransaction(transaction: string): Promise<any> {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/tx/hash/${transaction}`)
            );
            const data = {
                txid: response.data.txid,
                inputs: response.data.vin,
                outputs: response.data.vout,
                amount: response.data.confirmations,
                timestamp: response.data.time,
                blockHash: response.data.blockhash
            }
            return data;
        } catch (error) {
            throw new Error(`Failed to fetch transaction by hash: ${error.message}`);
        }
    }

    async searchByAddress(address: string): Promise<any>{
        try {
            const history = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/address/${address}/history`)
            );

            const balance = await firstValueFrom(
                this.httpService.get(`https://api.whatsonchain.com/v1/bsv/main/address/${address}/balance`)
            );

            const data = {
                Address:address,
                Balance: balance.data,
                History: history.data,
                
            }
            return data;
        } catch (error) {
            throw new Error(`Failed to fetch transaction by hash: ${error.message}`);
        }
    }
}
