import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserNameValidators } from './username-validators';
import { PasswordValidators } from './password-validators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    form: FormGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([Validators.required,
            UserNameValidators.cannotContainSpace]),
                UserNameValidators.shouldBeUnique],
            password: ['', Validators.compose([Validators.required, PasswordValidators.minLength])],
            confirm_password: ['', Validators.compose([Validators.required])]
        }, { validator: PasswordValidators.matchingPassword });
    }
    // form = new FormGroup({
    //     username :  new FormControl('', Validators.required),
    //     password : new FormControl('', Validators.required)
    // });

    signup() {
        console.log(this.form.value);
    }
}