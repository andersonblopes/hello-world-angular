import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input() cor: String = 'lightgray';
  @HostBinding('style.backgroundColor') corDeFundo: String = this.cor;

  @HostListener ('focus') aoFocar() {
    this.corDeFundo = this.cor;
  }

  @HostListener ('blur') aoPerderFoco() {
    this.corDeFundo = this.cor;
  }

}
