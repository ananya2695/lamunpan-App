import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the GreetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-greeting',
  templateUrl: 'greeting.html',
})
export class GreetingPage {
  backgroundImage = '../assets/imgs/welcome.png';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(() => {
      this.navCtrl.setRoot(CategoryPage)
    }, 3000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreetingPage');
  }

}
