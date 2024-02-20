import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' ,
})
export class LoginComponent {

  
    
  loginForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])

  })

  get login (){return this.loginForm.controls;}

  

  
}
