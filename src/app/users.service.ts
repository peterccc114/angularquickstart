import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { UserData } from './users';

@Injectable()
export class UserService{
    private _usernameurl = './assets/data/users.json';
    
    constructor(private _http: Http){}

    getusers(): any {
        return this._http.get(this._usernameurl)
        .map(this.extractData)
        .do(data => console.log(JSON.stringify(data)));
    }

    private extractData(response: Response) {
        return response.json();
    }

    loginResponse(name, pwd) {        
        return this._http.post('https://liarsclubserver.herokuapp.com/users/login/',{"name": name, "password": 'password'})
            .map(this.extractData);
    }

    getProfileInfo(id, token) {
        console.log("getProfileInfo", id, token);
        return this._http.post('https://liarsclubserver.herokuapp.com/users/getuserbyid/',{"id": id, "access_token": token})
        .map(this.extractData);
    }
    private loginDo(data) {
        console.log(data);
    }
}