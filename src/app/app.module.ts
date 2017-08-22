import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunoCardComponent } from './aluno-card/aluno-card.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoCardComponent,
    AlunoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
