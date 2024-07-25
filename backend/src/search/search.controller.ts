import { Body, Controller, Get } from "@nestjs/common";
import { SearchService } from "./search.service";
import { SearchDto } from "./dto/search.dto";

@Controller('api/search')
export class SearchController{
    constructor(private readonly searchsevice: SearchService){}
    @Get('block')
    async block(@Body() searchData: SearchDto){
        if(typeof searchData.search === 'number'){
            console.log(searchData.search)
            return this.searchsevice.searchByBlockHeight(searchData.search);
        }
        else{
            return this.searchsevice.searchByBlockHash(searchData.search);
        }
    }

    @Get('transaction')
    transaction(@Body() searchData: SearchDto){
        if(typeof searchData.search === 'string'){
            return this.searchsevice.searchByTransaction(searchData.search);
        }else return 'Invalid transaction hash';
    }
}