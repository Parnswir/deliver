import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-call',
  templateUrl: 'call.html'
})
export class CallPage {

  profile: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.profile = navParams.data.user;
  }

}
