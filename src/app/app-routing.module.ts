import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {   
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'pop-message',
    loadChildren: () => import('./pop-message/pop-message.module').then( m => m.PopMessagePageModule)
  },
  {
    path: 'default',
    loadChildren: () => import('./default/default.module').then( m => m.DefaultPageModule)
  },
  {
    path: 'pop-alert',
    loadChildren: () => import('./pop-alert/pop-alert.module').then( m => m.PopAlertPageModule)
  },
  {
    path: 'login-initial',
    loadChildren: () => import('./login-initial/login-initial.module').then( m => m.LoginInitialPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'create-order',
    loadChildren: () => import('./create-order/create-order.module').then( m => m.CreateOrderPageModule)
  },
  {
    path: 'go-to-cart',
    loadChildren: () => import('./go-to-cart/go-to-cart.module').then( m => m.GoToCartPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'list-creation',
    loadChildren: () => import('./list-creation/list-creation.module').then( m => m.ListCreationPageModule)
  },
  {
    path: 'list-of-orders',
    loadChildren: () => import('./list-of-orders/list-of-orders.module').then( m => m.ListOfOrdersPageModule)
  },
  {
    path: 'list-shows',
    loadChildren: () => import('./list-shows/list-shows.module').then( m => m.ListShowsPageModule)
  },
  {
    path: 'quotation',
    loadChildren: () => import('./quotation/quotation.module').then( m => m.QuotationPageModule)
  },
  {
    path: 'view-cart',
    loadChildren: () => import('./view-cart/view-cart.module').then( m => m.ViewCartPageModule)
  },
  {
    path: 'tab-orders',
    loadChildren: () => import('./tab-orders/tab-orders.module').then( m => m.TabOrdersPageModule)
  },
  {
    path: 'search-product',
    loadChildren: () => import('./search-product/search-product.module').then( m => m.SearchProductPageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./order-list/order-list.module').then( m => m.OrderListPageModule)
  },
  {
    path: 'invoice-delivery',
    loadChildren: () => import('./invoice-delivery/invoice-delivery.module').then( m => m.InvoiceDeliveryPageModule)
  },
  {
    path: 'invoicesegments',
    loadChildren: () => import('./invoicesegments/invoicesegments.module').then( m => m.InvoicesegmentsPageModule)
  },
  {
    path: 'delivery-pickup',
    loadChildren: () => import('./delivery-pickup/delivery-pickup.module').then( m => m.DeliveryPickupPageModule)
  },
  {
    path: 'delivery-location',
    loadChildren: () => import('./delivery-location/delivery-location.module').then( m => m.DeliveryLocationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
