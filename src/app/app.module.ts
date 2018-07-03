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
import {Api, MindService} from '../providers';
import {Camera} from '@ionic-native/camera';
import {TextareaAutoresize} from "../directive/textareaAutoresize.directive";

@NgModule({
  declarations: [
    MindApp,
    MindsPage,
    AboutPage,
    AddPage,
    TabsPage,
    TextareaAutoresize
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
    Camera,
    Api,
    MindService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [
    TextareaAutoresize
  ]
})
export class AppModule {}
