import { Component } from '@angular/core';

@Component({
  selector: 'app-criarusuario',
  standalone: false,

  templateUrl: './criarusuario.component.html',
  styleUrl: './criarusuario.component.css'
})
export class CriarusuarioComponent {
  criaUsuario(){
    alert("Usuário cadastrado com sucesso!")
  }
  cancelaOperacao(){
    alert("Cadastro cancelado!")
  }
}
