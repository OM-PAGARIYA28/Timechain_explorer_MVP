import { Controller, Get, Param, BadRequestException } from "@nestjs/common";
import { SearchService } from "./search.service";

@Controller('api/search')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Get('block/:search')
    async block(@Param('search') search: string) {
        if (!search || typeof search !== 'string') {
            throw new BadRequestException('Search parameter must be a non-empty string');
        }

        if (!isNaN(Number(search))) {
            return this.searchService.searchByBlockHeight(Number(search));
        } else {
            return this.searchService.searchByBlockHash(search);
        }
    }

    @Get('transaction/:search')
    async transaction(@Param('search') search: string) {
        if (!search || typeof search !== 'string') {
            throw new BadRequestException('Search parameter must be a non-empty string');
        }

        return this.searchService.searchByTransaction(search);
    }

    @Get('address/:search')
    async address(@Param('search') search: string) {
        if (!search || typeof search !== 'string') {
            throw new BadRequestException('Search parameter must be a non-empty string');
        }

        return this.searchService.searchByAddress(search);
    }

    @Get('*')
    async handleAll() {
        throw new BadRequestException('Invalid route');
    }
}
