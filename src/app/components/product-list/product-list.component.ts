import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

/**
 * Product List Component that calls api and loads Product Components to page.
 */
export class ProductListComponent implements OnInit {
  productsOnPage: ProductItem[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //Retrieves Products and sets each product quantity to 1.
    this.productsService.getProducts().subscribe((res) => {
      for (let num = 0; num < res.length; num++) {
        const product = res[num];
        product['quantity'] = 1;
      }
      this.productsOnPage = res;
      this.productsService.setProducts(res);
    });
  }

  /**
   * Adds item to cart. Calls the cartService method to add it.
   * @param productItem - information of the product, includes the desired quantity.
   */
  addToCart(productItem: ProductItem) {
    this.cartService.addToCart(productItem);
  }
}
