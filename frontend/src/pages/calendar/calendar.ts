import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  providers: []
})
export class CalendarPage {

  clicked: boolean = false

  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.profile = TabsPage.calendarParams.user;
  }

}
