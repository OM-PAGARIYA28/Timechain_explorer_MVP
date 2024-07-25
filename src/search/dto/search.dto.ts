import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SearchDto{
    @IsNotEmpty()
    searchData: number | string
}