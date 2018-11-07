import { Component } from '@angular/core';
import { NavController, ActionSheetController} from 'ionic-angular';
import {ProductPage} from "../product/product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = [];
  product = ProductPage;
  constructor(public navCtrl: NavController,
              private myASCtrl: ActionSheetController,
              private myHttp: HttpClient,
  ) { }
  ionViewDidLoad(){
    this.myHttp.get('https://dgtlejht.rrcj123.com/shangpin/list').subscribe((result: any)=>{
      this.list = result.msg;
    })
  }
  fenxiang(){
    this.myASCtrl.create({
      title:'分享到',
      buttons:[
        {text:'分享给好友'},
        {text:'分享到微信'},
        {text:'分享到QQ'},
        {text:'取消分享',role:'cancel'},

      ]
    }).present()
  }

}
