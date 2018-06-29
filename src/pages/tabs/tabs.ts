import {Component, ViewChild} from '@angular/core';

import {AboutPage} from '../about/about';
import {MindsPage} from '../minds/minds';
import {AddPage} from '../add/add';
import {Tabs} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddPage;
  tab2Root = MindsPage;
  tab3Root = AboutPage;

  @ViewChild('appTabs') tabRef: Tabs;

  constructor() {

  }

  ionViewDidEnter() {
    this.tabRef.select(1);
  }
}
