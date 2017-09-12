import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Product', component: InventoryComponent },
  { path: 'Inventory', component:ProductsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
