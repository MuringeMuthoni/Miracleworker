import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

import { HttpClient } from '@angular/common/http';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [SQLite,HTTP,Network,DatePipe,AndroidPermissions,Geolocation,
    LocationAccuracy,Diagnostic,Keyboard,DatePicker,SQLitePorter,HttpClient,NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
