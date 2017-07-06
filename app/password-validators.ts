import { FormControl,  FormGroup} from '@angular/forms';

export class PasswordValidators {
    static minLength(control: FormControl) {
     
       
                console.log("checking length"+control.value.length);
                if (control.value.length < 4) {
                    
                    return { minLength: true };
                }
                else
                   return null;
           
      
    }
    static matchingPassword(group : FormGroup) {
        
     
        let pwdControl = group.controls.password;
        //let confirmPwdControl = group.controls.confirm_password;


        if (pwdControl) {
            return {
                notMatching: true
            }
        }
        return null;

    }
}