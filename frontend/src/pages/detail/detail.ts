import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detaiL',
  templateUrl: 'detail.html'
})
export class DetailPage {

  profile: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    console.log(navParams);
    this.profile = navParams.data;
  }

}
