import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CheckoutPage} from "../pages/checkout/checkout";
import {MsgPage} from "../pages/msg/msg";
import {MsglistPage} from "../pages/msglist/msglist";
import {MyqrcodePage} from "../pages/myqrcode/myqrcode";
import {PersonalPage} from "../pages/personal/personal";
import {ProductPage} from "../pages/product/product";
import {ShoppingPage} from "../pages/shopping/shopping";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CheckoutPage,
    MsgPage,
    MsglistPage,
    MyqrcodePage,
    PersonalPage,
    ProductPage,
    ShoppingPage,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CheckoutPage,
    MsgPage,
    MsglistPage,
    MyqrcodePage,
    PersonalPage,
    ProductPage,
    ShoppingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
