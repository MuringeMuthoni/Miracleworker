
import { Location } from '@angular/common';
import { Component, OnInit,ElementRef,ViewChild, NgZone} from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import {  LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';



@Component({
  selector: 'app-delivery-location',
  templateUrl: './delivery-location.page.html',
  styleUrls: ['./delivery-location.page.scss'],
})
export class DeliveryLocationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
