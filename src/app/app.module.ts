import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryManagerComponent } from './inventory-manager/inventory-manager.component';
import { InventoryService } from './service/inventory.service';
import { StoreServiceService } from './storeService/store-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductPurchaseComponent } from './product-purchase/product-purchase.component';
import { ProducDataComponent } from './produc-data/produc-data.component';
import { PurchaseService } from './buyservice/purchase.service';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryManagerComponent,
    ProductPurchaseComponent,
    ProducDataComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [
    StoreServiceService,
    PurchaseService,
    InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
