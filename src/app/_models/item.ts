import { Price } from "./price";

export class Item{
  itemName : string;
  description : string;
  itemCode : string;
  inStock : boolean;
  prices : Price[];

  constructor(){}
}
