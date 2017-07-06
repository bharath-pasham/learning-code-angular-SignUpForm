"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserNameValidators {
    static shouldBeUnique(control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("checking uniqueness");
                if (control.value == "bharath")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    }
    static cannotContainSpace(control) {
        if (control.value.indexOf(" ") != -1) {
            return {
                cannotContainSpace: true
            };
        }
        return null;
    }
}
exports.UserNameValidators = UserNameValidators;
//# sourceMappingURL=username-validators.js.map