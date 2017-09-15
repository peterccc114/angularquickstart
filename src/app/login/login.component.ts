import { Component, Input, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';
import { UserData } from '../users';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  username: string;
  pwd: string;
  userdata: any;
  userID: string = "";
  token: string  = "";
  profileData: any;
  profiles = [];
  returnUrl:string = '../signup/singup.component';

  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() : void {
  }

  logIn() {
    this._userService.loginResponse(this.username, this.pwd).subscribe(
      userdata => {
        this.userdata = userdata;
        this.userID   = this.userdata.data._id;
        this.token    = this.userdata.data.token;

        this._userService.getProfileInfo(userdata.data._id, userdata.data.token).subscribe(
          profileData => {
            this.profiles= profileData;
            if (profileData.type){
              this.router.navigate(['/signup']);
              console.log(profileData.type);
            }
          }
        );

      }
    );
   
    
  }

  register() {
  }
}
