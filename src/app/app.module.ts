import { ScanQrPage } from '../pages/scan-qr/scan-qr';
import { ThanksPage } from '../pages/thanks/thanks';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { MenuPage } from '../pages/menu/menu';
import { CategoryPage } from '../pages/category/category';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { GreetingPage } from '../pages/greeting/greeting';

import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CategoryPage,
    ProductDetailPage,
    OrderDetailPage,
    ThanksPage,
    GreetingPage,
    ScanQrPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CategoryPage,
    ProductDetailPage,
    OrderDetailPage,
    ThanksPage,
    GreetingPage,
    ScanQrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
