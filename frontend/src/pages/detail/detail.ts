import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detaiL',
  templateUrl: 'detail.html'
})
export class DetailPage {

  profile: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.profile = navParams.data;
  }

}
