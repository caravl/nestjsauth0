import { IsString, IsNumber, IsOptional } from 'class-validator';

export class Item {
  @IsNumber() @IsOptional() readonly id: number; // POST doesn't require
  @IsString() readonly name: string;
  @IsNumber() readonly price: number;
  @IsString() readonly description: string;
  @IsString() readonly image: string;
}

// since you expect the payload to your endpoints to have the same structure of an Item object, the Item class is doubling as a type class and a data transfer object (DTO) class

// // Pre validation
// export class Item {
//   readonly id: number;
//   readonly name: string;
//   readonly price: number;
//   readonly description: string;
//   readonly image: string;
// }
