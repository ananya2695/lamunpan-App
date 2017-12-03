import { ProductDetailPage } from './../product-detail/product-detail';
import { MenuPage } from './../menu/menu';
import { CategoryService } from './category.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { homeModel, categoryModel, bestsellerModel } from './category.model';

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
  public homeModel: any = {};
  //public bestseller: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoryService: CategoryService) {
  }

  ionViewDidLoad() {
    this.categoryService.getCatgory().then(data => {
      this.homeModel = data;
      console.log(this.homeModel);

    }).catch(err => {
      console.log(err);
    });
  }
  goToAllProducts(id){
    this.navCtrl.push(MenuPage,{id});

  }
  goToProductsDetail(product){
    this.navCtrl.push(ProductDetailPage,product);
  }

}
