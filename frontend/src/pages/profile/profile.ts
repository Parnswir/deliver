import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profile: any;
  edit: boolean;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.profile = navParams.data.user;
    this.edit = navParams.data.edit;
  }

}
