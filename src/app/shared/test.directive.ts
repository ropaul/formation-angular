import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor() { }
@HostListener('click')
handleClick() {
  console.log('click');
}
}
