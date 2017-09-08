import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent  { 
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
