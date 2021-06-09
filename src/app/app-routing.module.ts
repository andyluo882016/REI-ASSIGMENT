import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryManagerComponent } from './inventory-manager/inventory-manager.component';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [
  { path: 'inventory', component: InventoryManagerComponent },
  { path: 'purchase', component: ProductPurchaseComponent },
  { path: 'logout', component: WelcomeComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
