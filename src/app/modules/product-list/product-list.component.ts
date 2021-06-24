import { Component, OnInit } from '@angular/core';

import { Product } from "./models/product.interface";
import { productCart } from './models/cart.interface';

import { MainService } from './services/main.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsCart: productCart[] = [];
  totalPurchase: number = 0;
  currentProducts$ = this.mainService.baseProducts;
  page: number = 1;
  modalTitle: string = '';
  modalOption:number = 1; // 1 Quantity ; 2 Size
  quantity: number = 1;
  size: string = '1';
  currentItem: any;


  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    
  }
  

  addProductsCart(item:Product){

    let productExist= false;
    if (this.currentItem !== item) {
      this.currentItem = item;
      this.quantity = 1;
    } 
    let totalCash = 0;
   let productToCart: productCart = {
    title: item.title,
    price: item.price,
    totalPurchase: item.totalPurchase,
    size: ""
   };
     
    switch(this.size){
      case '1':{
        productToCart.size = "small"; 
       break;
      }
      case '2':{
        productToCart.size = "medium"; 
       break;
      }
      case '3':{
        productToCart.size = "large"; 
       break;
      }
    }
    for (let index = 0; index < this.productsCart.length; index++) {
      if( ( productToCart.title === this.productsCart[index].title) && (productToCart.size === this.productsCart[index].size)) {
        
          productExist = true;
          let totalPurchaseBefore = this.productsCart[index].totalPurchase;
                let totalCashBefore = totalPurchaseBefore * this.productsCart[index].price;
                this.productsCart[index].totalPurchase += this.quantity;
                totalCash += this.productsCart[index].price * this.productsCart[index].totalPurchase;
                totalCash -= totalCashBefore;
                
      }
     }
    
    if (!productExist) {
      productToCart.totalPurchase += this.quantity;
      this.productsCart.push(productToCart);
      totalCash = productToCart.price * productToCart.totalPurchase
    }
    this.totalPurchase += totalCash;
    this.size = '1';
    this.quantity = 1;
  }
 

  deleteProduct(item: productCart ){
    for (let index = 0; index < this.productsCart.length; index++) {
      if(this.productsCart[index] === item){
        let totalProductPrice = this.productsCart[index].totalPurchase * this.productsCart[index].price;
        this.totalPurchase -= totalProductPrice;
        this.removeItemFromArr(this.productsCart, this.productsCart[index]); 
      }
      
    }
  }

  removeItemFromArr( arr: productCart[] , item: productCart ) {
    // var i = arr.indexOf( item );
    // if ( i !== -1 ) {
    //     arr.splice( i, 1 );
    // }
    var i = arr.indexOf( item );
    i !== -1 && arr.splice( i, 1 );
}

 modalSelect(idModal: number, item: Product){
  this.currentItem = item;
   if (idModal === 1) {   //Cantidad
     this.modalTitle = 'quantity'
     this.modalOption = 1
    } else {     ///Tamano
      this.size = '1'
      this.modalTitle = 'size'
      this.modalOption = 2
   }

 }

 
   modalWorkOption(){
     if (this.modalOption ===1) {
      // this.addQuantity();
     } else {
      // this.addSize();
     }
  
   }
  
   addQuantity(){
     
   }
  
   addSize(){
    
   }
  
}
