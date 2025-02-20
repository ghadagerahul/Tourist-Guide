import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-registeration-page',
  imports: [ReactiveFormsModule],
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




  // registrationForm: any = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   mobileNo: new FormControl(''),
  //   userName: new FormControl(''),
  //   password: new FormControl('')
  // });





  onSubmitData() {

    this.registrationForm.value;
    console.log(this.registrationForm.value)

    if (this.registrationForm.valid) {

      this.appservice.registerUser(this.registrationForm).subscribe(data => {
        console.log("#### Final op: " + data);
        this.registrationForm.reset();

      })



    }


  }

}
