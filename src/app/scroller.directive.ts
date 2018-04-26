import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroller]',
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class ScrollerDirective {
  private scrollTop: number;
  private initialClass: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.initialClass = 'effect';
   
   }

//    @HostListener('window:scroll', ['$event']) 
//    onWindowScroll(event) {
//      console.log(window.pageYOffset);
//      if el.nativeElement.pageYOffset === window.pageYOffset {

//      }
//  }

onScroll() {
  console.log('Div Top', this.el.nativeElement.offsetTop);
  console.log('class list', this.el.nativeElement.classList);
  console.log('window value', window.pageYOffset);
  console.log('innerheight', window.innerHeight);
  console.log('bottom position', window.pageYOffset + window.innerHeight);
  if (2900 <= window.pageYOffset) {
    this.el.nativeElement.classList.add(this.initialClass);
  } 
}


}
