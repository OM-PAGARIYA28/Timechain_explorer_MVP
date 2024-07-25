import { Body, Controller, Get } from "@nestjs/common";
import { SearchService } from "./search.service";
import { SearchDto } from "./dto/search.dto";

@Controller('api/search')
export class SearchController{
    constructor(private readonly searchsevice: SearchService){}
    @Get('block')
    block(@Body() searchData: SearchDto){
        console.log(searchData.searchData);
        console.log(typeof searchData.searchData);
        if(typeof searchData.searchData === 'number'){
            console.log(searchData.searchData)
            return this.searchsevice.searchByBlockHeight(searchData.searchData);
        }
        else{
            return this.searchsevice.searchByBlockHash();
        }
    }

    // @Get('transaction')
    // transaction(@Body() data)
}