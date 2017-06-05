import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Components
import { PriceOverTime } from '../components/price-over-time/price-over-time';
// Providers
import { Currencies } from '../providers/currencies';

// Charts js with ng2 support
import { ChartsModule } from 'ng2-charts/charts/charts';
import 'chart.js/dist/Chart.bundle.min.js';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PriceOverTime
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Currencies
  ]
})
export class AppModule {}
