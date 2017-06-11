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

  tab1Root = LoginPage;
  tab2Root = MotherlistPage;
  tab3Root = ListPage;

  constructor() {

  }
}
