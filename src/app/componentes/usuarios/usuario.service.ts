import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:3000/usuario'

  constructor() { }

  criar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario)
  }
}
