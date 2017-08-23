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

}
