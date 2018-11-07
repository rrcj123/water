import { Component } from '@angular/core';
import { ShoppingPage} from "../shopping/shopping";
import { PersonalPage} from "../personal/personal";
import { HomePage } from '../home/home';
import {MsglistPage} from "../msglist/msglist";
import {MyqrcodePage} from "../myqrcode/myqrcode";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyqrcodePage;
  tab3Root = PersonalPage;
  tab4Root = ShoppingPage;
  tab5Root = MsglistPage;

  constructor() {

  }
}
