import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registeration-page',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './registeration-page.component.html',
  styleUrl: './registeration-page.component.css'
})
export class RegisterationPageComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private appservice: AppService,
    private fb: FormBuilder
  ) { 
    
  }




  ngOnInit(): void {

    this.registrationForm = this.fb.group({

      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      mobileNo: ['', Validators.min(10)],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  registrationForm1: any = ({
    firstName: [''],
    lastName: [''],
    email: [''],
    mobileNo: [''],
    userName: [''],
    password: ['']
  })

  onSubmitData() {
    
    this.registrationForm.value.firstName = this.registrationForm1.firstName;
    this.registrationForm.value.lastName = this.registrationForm1.lastName;
    this.registrationForm.value.email = this.registrationForm1.email;
    this.registrationForm.value.mobileNo = this.registrationForm1.mobileNo;
    this.registrationForm.value.userName = this.registrationForm1.userName;
    this.registrationForm.value.password = this.registrationForm1.password;

    console.log(this.registrationForm.value)

    if (this.registrationForm.valid) {

      this.appservice.registerUser(this.registrationForm).subscribe(data => {
        console.log("#### Final op: " + data);
        this.registrationForm.reset();

      })



    }


  }

}
