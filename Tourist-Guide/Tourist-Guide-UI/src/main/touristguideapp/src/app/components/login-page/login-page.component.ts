import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private appservice: AppService,
    private router:Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  loginData: any = ({
    username: [''],
    password: ['']
  });

  LoginUserToPortal() {
    console.log('Logging in with-loginForm', this.loginForm);
    this.loginForm.value.userName = this.loginData.userName;
    this.loginForm.value.password = this.loginData.password;
    console.log("this.loginForm.value.userName: " + this.loginForm.value.userName);
    console.log("this.loginForm.value.password: " + this.loginForm.value.password);
    this.appservice.LoginUserToPortal(this.loginForm).subscribe(date => {

    })
  }

  goToRegisterationPage() {
    this.router.navigate(['/register'])
    }

}
