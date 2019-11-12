import { CartItem } from './cart.model';

// Order
export interface Order {
    shippingDetails?: any;
    product?: CartItem;
    orderId?: any;
    totalAmount?: any;
}