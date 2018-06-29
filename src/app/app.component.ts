import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import {TabsPage} from '../pages/tabs/tabs';

const config = {
  apiKey: 'AIzaSyDVZ6F7-FHUjEEP56AX0Y5jNbEFYDFlp6Y',
  authDomain: 'mindapp-cwi.firebaseapp.com',
  databaseURL: 'https://mindapp-cwi.firebaseio.com',
  projectId: 'mindapp-cwi',
  storageBucket: 'mindapp-cwi.appspot.com',
  messagingSenderId: '298940142311'
};

@Component({
  templateUrl: 'app.html'
})
export class MindApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

