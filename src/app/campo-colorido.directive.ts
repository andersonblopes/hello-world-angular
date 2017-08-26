import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input() cor: String = 'lightgray';
  @HostBinding('style.backgroundColor') corDeFundo: String;

  @HostListener ('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener ('blur') desColorir() {
    this.corDeFundo = 'transparent';
  }

}
