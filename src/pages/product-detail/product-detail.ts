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
  num = 0;
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
    console.log(prd);
    let Datacart = {
      "_id": "1",
      "name": "Americano",
      "img": "http://www.fusioncaffe.com/wp-content/uploads/2014/04/Caff%C3%A8-Americano.jpg",
      "size": "M",
      "typeOfproduct": "hot",
      "qty": 1,
      "price": 50,
      "table": 1,
    }
  }
}
