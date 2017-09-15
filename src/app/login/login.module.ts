import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
const appRoute: Routes = [
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [
        CommonModule, FormsModule, RouterModule.forRoot(appRoute)
    ],
    declarations: [
        LoginComponent, SignupComponent
    ]
})
export class LoginModule{}

