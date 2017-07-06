import { FormControl } from '@angular/forms';

export class UserNameValidators {
    static shouldBeUnique(control: FormControl) {
        return new Promise( function(resolve, reject)  {
            setTimeout(function () {
                console.log("checking uniqueness");
                if (control.value == "bharath") 
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    }
    static cannotContainSpace(control: FormControl) {
        if (control.value.indexOf(" ") != - 1) {
            return {
                cannotContainSpace: true
            }
        }
        return null;

    }
}