import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors,ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //declare the form group

  registerForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    fullName: new FormControl('', Validators.required),
    emailAddress: new FormControl('',  [Validators.required, Validators.email]),
    phone_number: new FormControl('',  [Validators.required, this.mobileNumberValidator() ]),
    password: new FormControl('',  [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    confirm_password: new FormControl('',  [Validators.required, this.passwordMatchValidator]),
    profile_image: new FormControl('', Validators.required)
  
  });

  //putting in an image
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.registerForm.patchValue({
        image: file // Set the selected file to the 'image' FormControl
      });
    }
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
  

//Validating mobile number

mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;
    if (isNaN(value)) {
      return { 'notANumber': { value: value } };
    }
    else if (value.length < 10 || value.length >= 11) {
      return { 'Invalidlength': { value: value } };
    }
    else if (value.length == 10) {
      return { 'validlength': { value: value } };
    }
    const mobileNumberRegex = /^[A-Z]{10}$/; // Change this regex based on your mobile number format
    const valid = mobileNumberRegex.test(value);
    return valid ? null : { 'invalidMobileNumber': { value: value } };
  };
}



//Important
  get register (){return this.registerForm.controls;}
  



  onRegisterUser(){
    debugger;
    const obj = this.registerForm.value;

    ///passing date to the API
   /* this.http.post('https://jsonplaceholder.typicode.com/users',obj).subscribe(res:any)=>{
      alert("Account Created");
    }*/
  }



  


}
