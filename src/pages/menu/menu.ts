import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductDetailPage } from '../product-detail/product-detail';
import { OrderDetailPage } from '../order-detail/order-detail';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public Product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) {
    this.navParams.data;
    this.getdata();
    console.log(this.navParams.data);
  }
  getdata() {
    let promise = new Promise((resove, reject) => {
      console.log('pass');
      // this.http.get('./assets/JSON/menu.json', {}).map(res => res.json()).subscribe(res => {
      //   resove(res);
      //   this.Product = res.products;
      //   console.log("DATA : " + JSON.stringify(this.Product));
      // });

      this.http.get('https://vit-c.herokuapp.com/api/productsbycate/' + this.navParams.data._id, {}).map(res => res.json()).subscribe(res => {
        resove(res);
        this.Product = res.products;
        console.log("DATA : " + JSON.stringify(this.Product));
      });
    });

    return promise;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  gotoDetail(prd) {
    this.navCtrl.push(ProductDetailPage, prd);
  }
  gotobasket() {
    this.navCtrl.push(OrderDetailPage);
  }
}
