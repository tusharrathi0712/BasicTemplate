import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  img: any[];

  constructor(public navCtrl: NavController) {
  		this.img = [
  			{
  				title: "Friends",
  				imgurls: ["errgsettg","etgetg"]
  			},
  			{
  				title: "Family",
  				imgurls: ["etgrtgh","etghetgh"]
  			}
  		];
  }

}
