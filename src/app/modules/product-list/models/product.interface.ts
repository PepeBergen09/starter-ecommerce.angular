export interface Product {
    id: string;
    img: string;
    title: string;
    shortdesc:string;
    description: string;
    price: number;
    totalPurchase: number;
    size: Size
}


interface Size{
    small: number;
     medium: number;
     large: number
}