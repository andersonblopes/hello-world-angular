import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent {

  ultimoId: number = 0;
  nome: String = 'Helena';
  adicionado: boolean = false;
  @Output('cadastrado') alunoAdicionado = new EventEmitter();

  adicionar() {
    this.adicionado = true;

    const aluno = {
      nome: this.nome,
      id: ++this.ultimoId
    };

    this.alunoAdicionado.emit(aluno);
  }


}
