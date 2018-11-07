import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsglistPage } from './msglist';

@NgModule({
  declarations: [
    MsglistPage,
  ],
  imports: [
    IonicPageModule.forChild(MsglistPage),
  ],
})
export class MsglistPageModule {}
