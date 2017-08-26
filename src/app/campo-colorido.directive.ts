import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgray');
   }

  @HostListener ('focus') aoFocar() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgreen');
  }

  @HostListener ('blur') aoPerderFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
