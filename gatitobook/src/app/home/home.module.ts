import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemComponent } from '../componentes/mensagem/mensagem.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
