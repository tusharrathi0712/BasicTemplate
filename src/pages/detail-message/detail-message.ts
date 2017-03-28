import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail-message',
  templateUrl: 'detail-message.html'
})

export class DetailMessagePage {

	selectedItem: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.selectedItem = navParams.get('item');
  }

}
