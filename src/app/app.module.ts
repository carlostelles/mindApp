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

@NgModule({
  declarations: [
    MindApp,
    MindsPage,
    AboutPage,
    AddPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MindApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MindApp,
    MindsPage,
    AboutPage,
    AddPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
