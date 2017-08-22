import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: String = 'Helena';
  adicionado: boolean = false;
  adicionar() {
       console.log(`Nome adicionado: ${this.nome}`);
       this.adicionado = true;
  }

}
