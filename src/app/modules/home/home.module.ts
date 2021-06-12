import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopBarModule } from "../top-bar/top-bar.module";
import { ProductListModule } from "../product-list/product-list.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TopBarModule,
    ProductListModule,
    SharedModule
  ]
})
export class HomeModule { }
