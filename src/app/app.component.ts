import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId: number = 0;
  nome: String = 'Helena';
  alunos = [];
  adicionado: boolean = false;
  time
  adicionar() {
    console.log(`Nome adicionado: ${this.nome}`);
    this.adicionado = true;
    this.alunos.push({
      nome: this.nome,
      id: ++this.ultimoId
    });
  }

}
