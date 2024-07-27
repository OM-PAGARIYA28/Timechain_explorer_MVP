import { Controller, Get, Param, BadRequestException } from "@nestjs/common";
import { SearchService } from "./search.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Search')
@Controller('api/search')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @ApiOperation({ description:'Enter BlockHash or BlockHeight.', summary: 'Search for Block.' })
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

    @ApiOperation({ description:'Enter Transaction.', summary: 'Search for Transaction.' })
    @Get('transaction/:search')
    async transaction(@Param('search') search: string) {
        if (!search || typeof search !== 'string') {
            throw new BadRequestException('Search parameter must be a non-empty string');
        }

        return this.searchService.searchByTransaction(search);
    }

    @ApiOperation({ description:'Enter Address.', summary: 'Search for Address.' })
    @Get('address/:search')
    async address(@Param('search') search: string) {
        if (!search || typeof search !== 'string') {
            throw new BadRequestException('Search parameter must be a non-empty string');
        }

        return this.searchService.searchByAddress(search);
    }

    @Get('*')
    @ApiOperation({ description:'To handel other invalid url', summary: 'Handel Invalid URL' })
    async handleAll() {
        throw new BadRequestException('Invalid route');
    }
}
