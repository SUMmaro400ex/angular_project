import {Component, OnInit, Input} from '@angular/core';

import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
    selector: 'app-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string = '';
    errorMessage: string;
    products: IProduct[];

    constructor(private _productService: ProductService){}
    
    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string):void {
        this.pageTitle = 'Product List: ' + message;
    }
}