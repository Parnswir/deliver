import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from "../profile/profile";
import { DetailPage } from "../detail/detail";
import { MidwifeService } from "../../app/services/MidwifeService";
import { MotherService } from "../../app/services/MotherService";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    MotherService,
    MidwifeService
  ]
})
export class LoginPage {

  email: string;

  constructor(public navCtrl: NavController, private motherService: MotherService, private midwifeService: MidwifeService) {

  }

  login() {
    if (this.email && this.email.toLowerCase().startsWith('mo')) {
      this.motherService.getRandom().subscribe(m => {
        this.navCtrl.setRoot(ProfilePage, {
          user: m[0],
          edit: true
        });
      });
    } else {
      this.midwifeService.getRandom().subscribe(m => {
        this.navCtrl.setRoot(DetailPage, {
          user: m[0],
          edit: true
        });
      });
    }
  }

}
