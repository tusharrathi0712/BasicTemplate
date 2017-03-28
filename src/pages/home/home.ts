import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailMessagePage } from '../detail-message/detail-message';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  friends: Array<{name: string , imgURL: any, msg: any}>

  constructor(public navCtrl: NavController) {
  		this.friends = [
  			{ name: "Tushar Rathi", imgURL: "", msg: "Hello world"},
  			{ name: "Anshul Kashyap", imgURL: "", msg: "Hello world"}
  		];
  }

  itemTapped(event, item) {
    
    this.navCtrl.push(DetailMessagePage, {
      item: item
    });
  }

}
