import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors,ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',

  styleUrls:['./create.component.css','one.css', 'two.css','three.css']
})
export class CreateComponent
{

  //Create FormGroup

  createForm: FormGroup = new FormGroup
  ({
    id: new FormControl('0'),
    fullName: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.email, Validators.required]),
    address: new FormControl('',[Validators.required]),
    companyName: new FormControl('',[Validators.required]),
    type: new FormControl('', Validators.required),
    companyAddress: new FormControl('', Validators.required)

});

//Client  FormGroup
clientDataForm: FormGroup = new FormGroup
({
  id: new FormControl('0'),
  companyName: new FormControl('', [Validators.required]),
  type: new FormControl('', [Validators.required]),
  companyAddress: new FormControl('', [Validators.required])

});

//Payment FormGroup

paymentForm: FormGroup = new FormGroup
({
  id: new FormControl('0'),
  quantity: new FormControl('', [Validators.required, this.mobileNumberValidator()]),
  price: new FormControl('', [Validators.required, this.mobileNumberValidator()]),
  items: new FormControl('', [Validators.required])

});

currentForm: string = 'form1';

toggleForms(form: string) {
  this.currentForm = form;
}

//Validating if Quantity and Price
mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;
    if (isNaN(value)) {
      return { 'notANumber': { value: value } };
    }
   
    const mobileNumberRegex = /^[A-Z]{10}$/; // Change this regex based on your mobile number format
    const valid = mobileNumberRegex.test(value);
    return valid ? null : { 'invalidMobileNumber': { value: value } };
  };
}


//Invoice Information
get create (){return this.createForm.controls;}

//Client Data Information
get clientData (){return this.clientDataForm.controls;}

//Payment Information
get payment (){return this.paymentForm.controls;}


activeMenuItem: string = 'Invoice Information';

setActiveMenuItem(menuItem: string) {
  this.activeMenuItem = menuItem;
}
}
