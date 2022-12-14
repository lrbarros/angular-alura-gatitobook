import { NovoUsuario } from './novo-usuario/novo-usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private service: NovoUsuarioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      userName: [''],
      fullName: [''],
      email: [''],
      password: [''],
    });
  }
  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
