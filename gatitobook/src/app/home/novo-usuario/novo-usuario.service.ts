import { NovoUsuario } from './novo-usuario/novo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http:HttpClient) {
  }

  novoUsuario(novoUsuario:NovoUsuario) {
    return this.http.post("http://localhost:3000/user/signup",novoUsuario).subscribe();
  }

}




