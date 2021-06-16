import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import products from "../../../../assets/json/products.json";
import { Product } from "../models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class MainService {


  
  baseProducts = of(products)
  

  constructor() {
    // console.log(this.baseProducts)
    // this.baseProducts.subscribe(element => console.log(element))
   }

   
}
