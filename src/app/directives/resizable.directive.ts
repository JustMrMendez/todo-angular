import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizable]',
  standalone: true,
})
export class ResizableDirective {
  startX: number = 0;
  startWidth: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.pageX;
    this.startWidth = this.el.nativeElement.offsetWidth;
    this.renderer.addClass(this.el.nativeElement, 'resizing');

    // Add mousemove and mouseup listeners to the window
    this.renderer.listen('window', 'mousemove', this.onMouseMove.bind(this));
    this.renderer.listen('window', 'mouseup', this.onMouseUp.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    const dx = event.pageX - this.startX;
    const newWidth = this.startWidth + dx;
    this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
  }

  onMouseUp(event: MouseEvent) {
    this.renderer.removeClass(this.el.nativeElement, 'resizing');
  }
}
