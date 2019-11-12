import { Injectable } from '@angular/core';
import { Order } from '../../model/e-commerce/order';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  // Array
  public OrderDetails;

  constructor(private router: Router) { }

  // Get order items
  public getOrderItems(): Order {
    return this.OrderDetails;
  }

  // Create order
  public createOrder(product: any, details: any, orderId: any, amount: any) {
    var item = {
      shippingDetails: details,
      product: product,
      orderId: orderId,
      totalAmount: amount
    };
    this.OrderDetails = item;
    this.router.navigate(['/e-commerce/checkout/success']);
  }

}
