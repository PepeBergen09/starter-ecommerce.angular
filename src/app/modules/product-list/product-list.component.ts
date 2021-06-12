import { Component, OnInit } from '@angular/core';

import products from "../../../assets/json/products.json";
import {Product } from "./models/product.interface";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsCart: Product[] = [];
  totalPurchase: number = 0;
  public currentProducts = products;
  page: number = 1;
  modalTitle: string = '';
  modalOption:number = 1; // 1 Quantity ; 2 Size
  quantity: number = 1;
  size: string = '1';
  currentItem: any; 

  constructor() { }
    
  
  

  public getProduct(items: string | any[]) {
    var elems = products.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
    
  }
  

  addProductsCart(item: any){
    let productExist= false;
    if (this.currentItem !== item) {
      this.currentItem = item;
      this.quantity = 1;
      // this.size = 1;
    } 

    
    let totalCash = 0;
    this.productsCart.forEach(element=>{
      if (item.title == element.title) {
        productExist = true;
        let totalPurchaseBefore = element.totalPurchase;
        let totalCashBefore = totalPurchaseBefore * element.price;
        element.totalPurchase += this.quantity;
        totalCash += element.price * element.totalPurchase;
        totalCash -= totalCashBefore;
        
      }
      return;
    });

    if (!productExist) {
      item.totalPurchase += this.quantity;
      this.productsCart.push(item);
      totalCash = item.price * item.totalPurchase
    }
    this.totalPurchase += totalCash
  }
 

  deleteProduct(item: Product ){
    for (let index = 0; index < this.productsCart.length; index++) {
      if(this.productsCart[index] === item){
        this.productsCart[index].totalPurchase --;
        this.totalPurchase -= this.productsCart[index].price;
        if (this.productsCart[index].totalPurchase === 0) {
         this.removeItemFromArr(this.productsCart, this.productsCart[index]);
        }   
      }
      
    }
  }

  removeItemFromArr( arr: Product[] , item: Product ) {
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
       this.addQuantity();
     } else {
       this.addSize();
     }
  
   }
  
   addQuantity(){
     
   }
  
   addSize(){
     switch(this.size){
       case '1':{
        this.currentItem.size.small ++;
        break;
       }
       case '2':{
        this.currentItem.size.medium ++;
        break;
       }
       case '3':{
        this.currentItem.size.large ++;
        break;
       }
     }
    console.log(this.currentItem) ;
   
   }
  
}
