import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MidwifeService } from './../../app/services/MidwifeService';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [MidwifeService]
})
export class MapPage {

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

}
