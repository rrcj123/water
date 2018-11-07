import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private  myHttp: HttpClient) {
    this.myHttp.get('https://dgtlejht.rrcj123.com/shangpin/list').subscribe((result: any)=>{
      this.list = result.msg[0];
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
