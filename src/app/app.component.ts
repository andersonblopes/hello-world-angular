import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Anderson Lopes';
  dataNascimento = new Date(1981, 11, 13);
  preco = 1250.25;
  troco = 750.75;

  alunos = [];

  aoCadastrar(aluno){
    this.alunos.push(aluno);
  }

}
