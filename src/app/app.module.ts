import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MindApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {AddPage} from '../pages/add/add';
import {MindsPage} from '../pages/minds/minds';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ApiProvider, DataProvider, MindProvider} from '../providers';
import {Camera} from '@ionic-native/camera';
import {TextareaAutoresize} from './directive';
import {Ng2OrderModule} from "ng2-order-pipe";
import {TimeAgoPipe} from 'time-ago-pipe';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {MyFilesPage} from '../pages/my-files/my-files';

const firebaseConfig = {
  apiKey: 'AIzaSyDVZ6F7-FHUjEEP56AX0Y5jNbEFYDFlp6Y',
  authDomain: 'mindapp-cwi.firebaseapp.com',
  databaseURL: 'https://mindapp-cwi.firebaseio.com',
  projectId: 'mindapp-cwi',
  storageBucket: 'mindapp-cwi.appspot.com',
  messagingSenderId: '298940142311'
};

@NgModule({
  declarations: [
    MindApp,
    MindsPage,
    AboutPage,
    MyFilesPage,
    AddPage,
    TabsPage,
    TextareaAutoresize,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MindApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    Ng2OrderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MindApp,
    MindsPage,
    MyFilesPage,
    AboutPage,
    AddPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Camera,
    ApiProvider,
    MindProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ],
  exports: [
    TextareaAutoresize
  ]
})
export class AppModule {}
