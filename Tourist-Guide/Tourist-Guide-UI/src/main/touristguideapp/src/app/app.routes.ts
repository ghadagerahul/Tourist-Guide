import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { Component } from '@angular/core';
import { RegisterationPageComponent } from './components/registeration-page/registeration-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterationPageComponent }
];
