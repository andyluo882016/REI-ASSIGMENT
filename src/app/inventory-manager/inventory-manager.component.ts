import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../service/inventory.service';
import { StoreServiceService } from '../storeService/store-service.service';
import { Store } from '../store';
import { Item } from '../item';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.css']
})
export class InventoryManagerComponent implements OnInit {
  items: Item[];
  stores: Store[];
  localStore: Store[];
  availableLocation: any = ["CHARLOTTE", "ONLINE", "TACOMA", "GREENVILLE", "ASHEVILLE", "SEATTLE"];
  constructor(private inventoryService: InventoryService,
              private storeServiceService: StoreServiceService
             ) { }

  ngOnInit() {
  }

  showInventoryProduct() {
    this.inventoryService.getProducts().subscribe(
      (response) => {
        this.items = response;
        console.log("get all products");
      }
    );
  }

  showAllStores() {
    this.storeServiceService.getAllStores().subscribe(
      (response) => {
        this.stores = response;
        console.log("get all stores");
      }

    );
  }

  showNearByStores(lname: string) {
    this.storeServiceService.findProductByLocation(lname).subscribe(
      (response) => {
        this.localStore = response;
        console.log("get all stores");
      }

    );
  }

  clearupTables() {
    this.items =[];
    this.stores =[];
    this.localStore =[];
  }
}
