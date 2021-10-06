import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WcfServiceService } from '../wcf-service.service';
@Component({
  selector: 'app-delivery-pickup',
  templateUrl: './delivery-pickup.page.html',
  styleUrls: ['./delivery-pickup.page.scss'],
})
export class DeliveryPickupPage implements OnInit {

  constructor(private Loc: Location,private router:Router,private wcf:WcfServiceService) { }

  ngOnInit() {
    //var tosend =  this.wcf.user_Id +";"+this.wcf.fireid + ";none;" + "delivery_pickup"
   // this.wcf.Log_usage(tosend)
  }


  go_home(){
    this.Loc.back();
  }


  proceeduchumi(){
  this.wcf.pickstation = "Uchumi"
  this.wcf.pickupfee = 0
   // this.router.navigate(['/view-checkout']);
   this.go_home();

  }


  proceedmawa(){
    this.wcf.pickstation = "mawa"
    this.wcf.pickupfee = 0
   // this.router.navigate(['/view-checkout']);
    this.go_home();
  }



}
