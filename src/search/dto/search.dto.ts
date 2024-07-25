import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SearchDto{
    @IsNotEmpty()
    search: number | string
}