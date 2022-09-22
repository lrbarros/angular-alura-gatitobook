import { NovoUsuario } from './novo-usuario/novo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http:HttpClient) {
  }

  cadastrarNovoUsuario(novoUsuario:NovoUsuario) {
    return this.http.post("http://localhost:3000/user/signup",novoUsuario);
  }

}




