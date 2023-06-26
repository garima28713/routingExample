import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private router: Router ){

  }
  mockProducts = [
    {
      id: 1,
      product_name: 'Sprouts - Baby Pea Tendrils',
      image: 'http://dummyimage.com/141x100.png/cc0000/ffffff',
      price: '$8.78',
    },
    {
      id: 2,
      product_name: 'Appetizer - Chicken Satay',
      image: 'http://dummyimage.com/116x100.png/cc0000/ffffff',
      price: '$67.77',
    },
    {
      id: 3,
      product_name: 'Cheese - Parmesan Cubes',
      image: 'http://dummyimage.com/245x100.png/dddddd/000000',
      price: '$34.37',
    },
    {
      id: 4,
      product_name: 'Mustard - Pommery',
      image: 'http://dummyimage.com/159x100.png/5fa2dd/ffffff',
      price: '$85.19',
    },
    {
      id: 5,
      product_name: 'English Muffin',
      image: 'http://dummyimage.com/215x100.png/dddddd/000000',
      price: '$57.24',
    },
  ];

  productDetails(id:number) {
    console.log(id);
    this.router.navigate(['product', id]);
  }
  
  
}
