import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";
import { DetailPage } from "../detail/detail";
import { MidwifeService } from './../../app/services/MidwifeService';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [MidwifeService]
})
export class ListPage implements OnInit {

  mode = 'Observable'
  errorMessage:string
  results:any=[]

  constructor(public navCtrl: NavController, private midwifeService: MidwifeService) {

  }

  ngOnInit() {
    this.getMidwives();
  }

  getMidwives() {
    this.midwifeService.getMidwives()
                         .subscribe(
                           results => this.results = results,
                           error =>  this.errorMessage = <any>error);
  }

  showDetail(detail) {
    TabsPage.calendarParams = {
      user: detail
    };

    this.navCtrl.push(DetailPage, {
      user: detail
    });
  }

}
