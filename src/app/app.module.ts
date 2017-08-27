import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlunoCardComponent } from './aluno-card/aluno-card.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoCardComponent,
    AlunoFormComponent,
    CampoColoridoDirective,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
