import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MyqrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myqrcode',
  templateUrl: 'myqrcode.html',
})
export class MyqrcodePage {

  constructor(public navCtrl: NavController,private myASCtrl: ActionSheetController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyqrcodePage');
  }
  fenxiang() {
    console.log(111);
    this.myASCtrl.create({
      title: '分享到',
      buttons: [
        {text: '分享给好友'},
        {text: '分享到微信'},
        {text: '分享到QQ'},
        {text: '取消分享', role: 'cancel'},

      ]
    }).present()
  }
}
