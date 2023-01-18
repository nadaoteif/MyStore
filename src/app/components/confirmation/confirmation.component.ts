import { Component, Input, OnInit } from '@angular/core';
import { OrderInfo } from 'src/app/models/orderInfo';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})

/**
 * Confirmation component loaded after a user submits their order.
 */
export class ConfirmationComponent implements OnInit {
  orderInfo!: OrderInfo;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.orderInfo = this.cartService.getOrderInfo();
  }

  ngOnDestroy(): void {
    //Clears the orderInfo after you navigate away from the confirmation page.
    this.cartService.setOrderInfo(new OrderInfo());
  }
}
