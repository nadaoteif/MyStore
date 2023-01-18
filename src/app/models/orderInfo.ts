export class OrderInfo {
  id?: number;
  fullName: string;
  totalPrice: number;
  ccNum: string;

  constructor() {
    this.id = 0;
    this.fullName = '';
    this.totalPrice = 0;
    this.ccNum = '';
  }
}
