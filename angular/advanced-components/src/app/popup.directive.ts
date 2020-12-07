import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective {
  @Input() message: string;

  constructor(_elementRef: ElementRef) { 
    console.log(_elementRef);
  }

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }

}
