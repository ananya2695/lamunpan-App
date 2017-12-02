import { CategoryService } from './category.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public categoryService :CategoryService) {
  }

  ionViewDidLoad() {
    this.categoryService.getCatgory().then(data =>{
      console.log(data);      
    }).catch(err =>{
      console.log(err);
    });
  }

}
