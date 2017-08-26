import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: String = 'lightgray';

  @HostListener ('focus') aoFocar() {
    this.corDeFundo = 'lightgreen';
  }

  @HostListener ('blur') aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }

}
