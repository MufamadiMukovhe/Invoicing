import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors,ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent
{

  profileForm: FormGroup = new FormGroup( {

    id: new FormControl('0'),
    fullName: new FormControl('Mufamadi Mukovhe',[Validators.required]),
    userName: new FormControl('Mkay@98',[Validators.required, Validators.email]),
    phone_number: new FormControl('079 233 1705', [Validators.required, this.mobileNumberValidator() ]),
    emailAddress: new FormControl('Mukovhe@tut.ca.za', Validators.email),
    password: new FormControl('12345678',  [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    confirm_password: new FormControl('',  [Validators.required, this.passwordMatchValidator])
    
  }
  
);
profileImage: any = 'assets/img/Ellipse 2.svg'; 
addImage: string = 'assets/img/Group 2.svg'; 


imageUrl!: string | ArrayBuffer | null;

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
    this.profileImage = reader.result as string | ArrayBuffer;    };
  }

}

get change (){return this.profileForm.controls;}

//validating mobile number

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

 /*Testing the confirm password*/
  
 passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirm_password = control.get('confirm_password');
  const value = control.value;

  if(password != confirm_password)
  {
    return {'noMatch': {value: value}};
  }

  return {'noMatch': {value: value}};

}
 
}
