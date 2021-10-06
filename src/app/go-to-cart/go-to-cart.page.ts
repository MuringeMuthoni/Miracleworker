import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-go-to-cart',
  templateUrl: './go-to-cart.page.html',
  styleUrls: ['./go-to-cart.page.scss'],
})
export class GoToCartPage implements OnInit {
  daBuilding;
  thelist;
  segmentModel = "Details";
  
  usage={
    promoname:'',
   
  }

  constructor(private router: Router) {
    
    this.daBuilding = [
      { id: 0,avatarimage:'assets/cabbage.jpg', prodname: 'White Cabbage ',pricerangeA: 'KSH 2000',Bysupplier: 'Bella hut',proquantity:"2" },  
       
   
    ];
    
   }

   slideOpts_stores = {
    slidesPerView: 4,
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  };
  ngOnInit() {
   
  }
  
   letsviewcheckout(){
    this.router.navigate(['/checkout']);
   }
   letsviewlist(){
    this.thelist = [
      { id: 0,avatarimage:'assets/headphones.jpg'},
         {id: 1,avatarimage:'assets/headphones3.jpg'},
         {id: 2,avatarimage:'assets/headphone4.jpg'},
   
    ];
   }
   letsviewquotation(){
    this.router.navigate(['/quotation']);
   }

}
