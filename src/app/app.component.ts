import { Component } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';
//import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//
@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers: [ProductService]
})
export class AppComponent  {
  iproduct: IProduct[];
  constructor(private _product: ProductService) {
  } 

  ngOnInit() : void {
    this._product.getproducts()
    .subscribe(iproducts => this.iproduct = iproducts);
  }
  name = 'World1'; 
  appTitle: string = "Welcome";
  appStatus: boolean = true;
  appList: any[] = [{
    "ID": "1",
    "Name": "One"
  },
  {
    "ID":"2",
    "Name": "two"
  }
];


}



