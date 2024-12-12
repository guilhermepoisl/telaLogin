import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { LoginComponent } from './componentes/login/login.component';
import { CriarusuarioComponent } from './componentes/usuarios/criarusuario/criarusuario.component';
import { UsuarioComponent } from './componentes/usuarios/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

    LoginComponent,
    CriarusuarioComponent,
    UsuarioComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    CabecalhoComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
