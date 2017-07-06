"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PasswordValidators {
    static minLength(control) {
        console.log("checking length" + control.value.length);
        if (control.value.length < 4) {
            return { minLength: true };
        }
        else
            return null;
    }
    static matchingPassword(group) {
        let pwdControl = group.controls.password;
        //let confirmPwdControl = group.controls.confirm_password;
        if (pwdControl) {
            return {
                notMatching: true
            };
        }
        return null;
    }
}
exports.PasswordValidators = PasswordValidators;
//# sourceMappingURL=password-validators.js.map