import { Directive, HostListener, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';

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
  // console.log('Div Top', this.el.nativeElement.offsetTop);
  // console.log('class list', this.el.nativeElement.classList);
  // console.log('window value', window.pageYOffset);
  // console.log('innerheight', window.innerHeight);
  // console.log('bottom position', window.pageYOffset + window.innerHeight);
  // const divTop = this.el.nativeElement.offsetTop + 260;
  // const windowBottom = window.pageYOffset + window.innerHeight;
  // if (windowBottom >= divTop) {
  //   this.el.nativeElement.classList.add(this.initialClass);
  // } else {
  //   this.el.nativeElement.classList.remove(this.initialClass);
  // }
}


}
