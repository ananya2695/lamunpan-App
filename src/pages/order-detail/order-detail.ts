import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderDetailService } from './order-detail.service';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  private orderDetail: any = {};

  constructor(private orderDetailService: OrderDetailService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.orderDetailService.getOrderDetail().then(data => {
      this.orderDetail = data;
    }).catch(err => {

    });
  }

  deleteItem(productID) {
    for (let i = 0; i < this.orderDetail.products.length; i++) {
      if (productID === this.orderDetail.products[i]._id) {
        this.orderDetail.totalPrice -= this.orderDetail.products[i].price * this.orderDetail.products[i].qty;
        this.orderDetail.totalQty -= this.orderDetail.products[i].qty;
        this.orderDetail.products.splice(i, 1);
        break;
      }
    }
  }

  buy(){
    console.log(this.orderDetail);
  }

}
