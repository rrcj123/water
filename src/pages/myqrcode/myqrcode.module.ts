import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyqrcodePage } from './myqrcode';

@NgModule({
  declarations: [
    MyqrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(MyqrcodePage),
  ],
})
export class MyqrcodePageModule {}
