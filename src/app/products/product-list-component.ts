import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
	selector: 'pm-products', 
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';

  imageWidth: number = 40;
  imageMargin: number = 2;

  showImage: boolean = false;

  _listFilter: string;

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.perfomFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 3.5,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048 ",
      "releaseDate": "March 21, 2019",
      "description": "Curved claw Stell hammer",
      "price": 8.9,
      "starRating": 4.1,
      "imageUrl": "assets/images/hammer.png"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('ng OnInit ');
  }

  perfomFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
