import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    // email: ["", [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidatorService()]],
    email: ["", [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorService.validate]],
    username: ["", [Validators.required, this.validatorsService.cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    password2: ["", [Validators.required]]
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo("password", "password2")
    ]
  });


  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
  ) { }


  onSubmit() {
    this.myForm.markAllAsTouched();
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

}
