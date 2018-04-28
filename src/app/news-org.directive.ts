import { Directive, ElementRef, HostListener, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNewsOrg]'
})
export class NewsOrgDirective {
  @Output() newSource = new EventEmitter<string>();

  sourceChange: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event']) onClick($event){
    // console.info('clicked: ' + $event);
    console.log('from directive ',this.el.nativeElement.value);
    const sourceChange = this.el.nativeElement.value;
    this.newSource.emit(this.sourceChange);
}



}
