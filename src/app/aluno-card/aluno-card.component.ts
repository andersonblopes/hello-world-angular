import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aluno-card',
  templateUrl: './aluno-card.component.html',
  //styleUrls: ['./aluno-card.component.css']
  styles: [
   `
      .card-block{
        text-transform: uppercase;
      }
    `
  ]
})
export class AlunoCardComponent {
  @Input('object') aluno : any

  getEstiloCardBlock(){
    return {
      textAlign: 'right !inportant',
      //'height': this.aluno.id + '%',
      'border-width.px': this.aluno.id,
      backgroundColor: this.aluno.id % 2 == 0 ? 'lightBlue' : 'lightGreen'

    };
  }

  isAdmin(){
    return this.aluno.nome.startsWith('H');
  }

  //getListaClassesCss(){
    //return ['badge', 'badge-secondary'];
  //}

}
