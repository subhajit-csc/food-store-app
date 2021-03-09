import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MarketplaceComponent } from './marketplace.component';
import { MarketplaceRoutingModule } from './marketplace-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarketplaceRoutingModule,
    FlexLayoutModule
  ],
  declarations: [MarketplaceComponent]
})
export class MarketplaceModule { }
