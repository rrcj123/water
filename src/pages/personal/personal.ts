import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
list = [
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp1.png","mingcheng":"我的订单"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp2.png","mingcheng":"积分订单"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp3.png","mingcheng":"团购订单"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp4.png","mingcheng":"购物小车"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp5.png","mingcheng":"我的积分"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp6.png","mingcheng":"充值记录"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp7.png","mingcheng":"我的收藏"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp8.png","mingcheng":"我要提现"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp9.png","mingcheng":"我的推广"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp10.png","mingcheng":"我的粉丝"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp11.png","mingcheng":"我的伙伴"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp12.png","mingcheng":"我的消息"},
  {"url":"https://img.rrcj123.com/water/imgs/uhomeapp13.png","mingcheng":"我的银联"},
];
  constructor(public navCtrl: NavController) {
  }


}
