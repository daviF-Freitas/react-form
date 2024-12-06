import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class DisabledValidator {
  static cannotContainSpace(control: FormControl) {
    if (control.value as string === '' ) {
      return control.disable();
    }
    return null
  }

}
