import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LoginModule } from './login/login.module';

import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
    imports:[
       RouterModule. forRoot(appRoutes)
    ],
    exports: [
        RouterModule,
        LoginModule
    ]
    
})
export class AppRoutingModule { }
