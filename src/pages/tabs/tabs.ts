import {Component, ViewChild} from '@angular/core';
import {MindsPage} from '../minds/minds';
import {AddPage} from '../add/add';
import {Tabs} from 'ionic-angular';
import {MyFilesPage} from '../my-files/my-files';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddPage;
  tab2Root = MindsPage;
  tab3Root = MyFilesPage;

  @ViewChild('appTabs') tabRef: Tabs;

  constructor() {

  }

  ionViewDidEnter() {
    this.tabRef.select(1);
  }
}
