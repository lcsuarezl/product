import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

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

  errorMessage: string;

  _listFilter: string;

  constructor(private productService: ProductService) {  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.perfomFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('ng OnInit ');
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        console.log('products:' + products);
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    this.filteredProducts = this.products;
  }

  perfomFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List:' + message
  }

}
