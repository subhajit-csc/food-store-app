import { Item } from "./item";

export class Catagories {

  categoryName : string;
  categoryDescription : string;
  items : Item[];
  createdAt : Date;
  updatedAt : Date;

  constructor(obj?: any) {

  }
}
