import { Component } from '@angular/core';

import { DetailPage } from '../detail/detail';
import { ListPage } from '../list/list';
import { MotherlistPage } from '../motherlist/motherlist';
import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab6Root = ProfilePage;
  tab2Root = ListPage;
  tab3Root = MapPage;
  tab4Root = DetailPage;
  tab5Root = LoginPage;
  tab1Root = MotherlistPage;

  constructor() {

  }
}
