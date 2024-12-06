import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: 'appValidaCep'
})
export class ValidaCepDirective {

  @Input() disableControl( control: FormControl ) {

    if (control.value === '' ) {
      return true;
    }else{
      return false;
    }
  }

  constructor() { }


}
