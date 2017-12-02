import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';
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
  private apiUrl = 'http://'
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) {
    this.getdata();

  }
  getdata() {
    let promise = new Promise((resove, reject) => {
      console.log('pass');
      this.http.get('./pages/menu/menu.json', {}).map(res => res.json()).subscribe(res => {
        resove(res);
        console.log("DATA : " + res);
      });
    });

    return promise;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
