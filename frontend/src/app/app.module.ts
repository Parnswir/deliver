import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { DetailPage } from '../pages/detail/detail';
import { ListPage } from '../pages/list/list';
import { MotherlistPage } from '../pages/motherlist/motherlist';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { CallPage } from '../pages/call/call';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DetailPage,
    ListPage,
    MotherlistPage,
    LoginPage,
    MapPage,
    ProfilePage,
    CallPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailPage,
    ListPage,
    MotherlistPage,
    LoginPage,
    MapPage,
    ProfilePage,
    CallPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
