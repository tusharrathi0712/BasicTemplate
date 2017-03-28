import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailMessagePage } from '../detail-message/detail-message';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	
  family: Array<{name: string , imgURL: any, msg: any}>	

  constructor(public navCtrl: NavController) {
  		this.family = [
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
