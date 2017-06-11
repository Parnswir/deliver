import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  providers: []
})
export class CalendarPage {

  clicked: boolean = false

  constructor(public navCtrl: NavController) {

  }

}
