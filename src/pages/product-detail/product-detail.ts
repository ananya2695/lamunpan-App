import { OrderDetailPage } from '../order-detail/order-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  public active: Array<any> = [];
  public activeTy: Array<any> = [];

  public size;
  public type;
  public prd;
  num: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prd = this.navParams.data;
    console.log(this.prd);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  selectSize(si) {
    this.active[si] = "background-color: red;";
    this.size = si;
  }
  selectType(ty) {
    this.activeTy[ty] = "background-color: red;";
    this.type = ty;
  }
  add() {
    this.num += 1;
  }
  remove() {
    if (this.num !== 0) {
      this.num -= 1;
    }
  }
  addToCart(prd) {
    if (this.num !== 0) {
      let typeselect;
      let price1: number = 0;
      let price2: number = 0;
      for (let i = 0; i < prd.size.length; i++) {
        if (this.size == prd.size[i].size) {
          price1 = prd.size[i].price;
        }
      }
      for (let i = 0; i < prd.type.length; i++) {
        if (this.type == prd.type[i].name) {
          price2 = prd.type[i].price;
        }
      }
      let pricesum = price1 + price2 * this.num;
      let Datacart = {

        "_id": prd._id,
        "name": prd.name,
        "pic": prd.pic,
        "size": this.size,
        "type": this.type,
        "qty": this.num,
        "price": pricesum,
        "table": 1,
      }
      this.navCtrl.pop();
      console.log(Datacart);
    } else {
      alert("กรุณาเลือกจำนวนสินค้า")
    }


  }
  gotobasket(){
    this.navCtrl.push(OrderDetailPage);
  }
}
