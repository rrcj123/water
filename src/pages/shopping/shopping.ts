import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductPage} from "../product/product";
import {CheckoutPage} from "../checkout/checkout";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the ShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})
export class ShoppingPage {
  list = [];
  product = ProductPage;
  checkout = CheckoutPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private  myHttp: HttpClient) {

  }

  ionViewDidLoad() {
    this.myHttp.get('https://dgtlejht.rrcj123.com/shangpin/list').subscribe((result: any)=>{
      this.list = result.msg;
      console.log(result.msg[0])
    });
    console.log('ionViewDidLoad ShoppingPage');
  }

}
