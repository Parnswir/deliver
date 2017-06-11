import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { ListPage } from '../list/list';
import { MotherlistPage } from '../motherlist/motherlist';
import { LoginPage } from '../login/login';
import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  user: any;
  tab1Root = null;
  tab2Root = null;
  tab3Root = CalendarPage;
  tab4Root = null;

  static calendarParams = null;
  get calendarParams() {
    return TabsPage.calendarParams;
  }

  get isMidwife() {
    return !!this.user.since;
  }

  get profileParams() {
    return {
      user: this.user,
      edit: true
    };
  }

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.user = navParams.data.user;
    this.tab1Root = navParams.data.page;
    this.tab2Root = this.isMidwife ? MotherlistPage : ListPage;
  }
}
