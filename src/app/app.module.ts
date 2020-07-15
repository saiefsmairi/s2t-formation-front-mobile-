import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HashLocationStrategy } from '@angular/common';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx'
import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    FormsModule, ReactiveFormsModule ,
    NgxDatatableModule,
    Ng2SearchPipeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass:IonicRouteStrategy},
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    Camera,
    LocalNotifications,
    Base64
    

  ],
  bootstrap: [AppComponent]
})
//fel useclass kenet IonicRouteStrategy raditha HashLocationStrategy bech njarb run fel browser
export class AppModule {}
