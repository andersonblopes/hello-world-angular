import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: String = '';
  matricula: String = '';

  adicionar() {
    console.log(`Adicionando ${this.nome}`);//Templates literal

    console.log('Com matrícula: ' + this.matricula); //Concatenando Strings

    const numero = Math.round(Math.random() * 100);
    this.nome = 'Helena ' + numero;
  }

  alterarNome(event: any) {
    this.nome = event.target.value;
  }

  adicionarMatricula(event: any) {
    this.matricula = event.target.value;
  }

}
