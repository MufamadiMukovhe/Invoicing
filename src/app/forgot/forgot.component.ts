import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent 
{

  forgotForms: FormGroup =  new FormGroup({

    emailAddress: new FormControl('',  [Validators.required, Validators.email]),
  })
  get forgot_password (){return this.forgotForms.controls;}

}
