import { Component, OnInit } from '@angular/core';
import { Catagories } from 'src/app/_models/catalgories';
import { MarketplaceService } from 'src/app/_services/catalog/marketplace.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  catagories : Catagories[] = [];

  constructor(private service: MarketplaceService) {
   }

  ngOnInit(): void {
    this.service.getAllCatagories().subscribe( categories => {
      console.log(categories);
       this.catagories = categories;
    });
    console.log(this.catagories);
  }

}
