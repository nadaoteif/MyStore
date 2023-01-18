import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {
  productItem!: ProductItem;
  productItemsList!: ProductItem[];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>('../assets/data.json');
  }

  setProducts(productItemsList: ProductItem[]) {
    this.productItemsList = productItemsList;
  }

  getSingleProduct() {}
}
