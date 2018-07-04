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
import {ApiProvider, MindProvider} from '../providers';
import {Camera} from '@ionic-native/camera';
import {TextareaAutoresize} from './directive';
import {Ng2OrderModule} from "ng2-order-pipe";
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [
    MindApp,
    MindsPage,
    AboutPage,
    AddPage,
    TabsPage,
    TextareaAutoresize,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MindApp),
    Ng2OrderModule
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
    ApiProvider,
    MindProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [
    TextareaAutoresize
  ]
})
export class AppModule {}
