import { Injectable } from '@angular/core';
import { OrderInfo } from '../models/orderInfo';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root',
})

/**
 * Service that handles information related to a User's cart and their orderInfo.
 */
export class CartService {
  productsInCart: ProductItem[] = [];
  orderInfo!: OrderInfo;

  constructor() {}

  /**
   * Adds an item to a user's cart. Updates quantity if item already exists.
   * @param productItem
   */
  addToCart(productItem: ProductItem) {
    const cartProduct = this.productsInCart.find(
      (item) => item.id == productItem.id
    );
    if (cartProduct?.quantity && productItem?.quantity) {
      cartProduct.quantity += productItem.quantity;
    } else {
      this.productsInCart.push(productItem);
    }
  }

  /**
   * Return user's cart
   * @returns List of products in cart
   */
  getCart(): ProductItem[] {
    return this.productsInCart;
  }

  /**
   * Empties a user's cart, generally after an order is submitted.
   * @returns the newly emptied cart.
   */
  setCart(productsInCart: ProductItem[]) {
    this.productsInCart = productsInCart;
  }

  /**
   * Empties a user's cart, generally after an order is submitted.
   * @returns the newly emptied cart.
   */
  setCartToEmpty(): ProductItem[] {
    this.productsInCart = [];
    return this.productsInCart;
  }

  /**
   * Stores a user's order info after an order has been submitted.
   * @param orderInfo -
   */
  setOrderInfo(orderInfo: OrderInfo): void {
    this.orderInfo = orderInfo;
  }

  /**
   * Retrieves a user's orderInfo
   * @returns OrderInfo object containing user info.
   */
  getOrderInfo(): OrderInfo {
    return this.orderInfo;
  }
}
