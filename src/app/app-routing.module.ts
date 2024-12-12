import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarusuarioComponent } from './componentes/usuarios/criarusuario/criarusuario.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'criarUsuario',
    component: CriarusuarioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
