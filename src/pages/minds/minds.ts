import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Mind} from '../../models/mind';
import {MindProvider} from '../../mocks/providers/mind';

@Component({
  selector: 'page-minds',
  templateUrl: 'minds.html',
})
export class MindsPage {

  minds: Mind[];
  mindCurrent: Mind;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mindService: MindProvider) {
    this.minds = this.get();
  }

  get(): Mind[] {
    return this.mindService.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MindsPage');
  }

}
