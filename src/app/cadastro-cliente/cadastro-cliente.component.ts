import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  profissoes = ['Advogado', 'Analista de Sistemas', 'Estudante', 'Engenheiro', 'Recepcionista', 'Outra'];
  profissaoDefault = 'Outra';

  salvar(form: NgForm) {
    console.log(form.value.nome);
    console.log(form.value.email);
    console.log(form.value.profissao);
  }

}
