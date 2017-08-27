import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {

  cliente = new Cliente();
  profissoes = ['Advogado', 'Analista de Sistemas', 'Estudante', 'Engenheiro', 'Recepcionista', 'Outra'];

  salvar(form: NgForm) {
    //this.cliente.nome = form.value.primeiroNome;
    //this.cliente.email = form.value.emailAddress;
    //this.cliente.profissao = form.value.profissao;

    console.log(form.value);
  }

}
