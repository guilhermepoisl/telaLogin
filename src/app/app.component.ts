import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, CabecalhoComponent,RouterModule]
})
export class AppComponent {
  title = 'telaLogin';

}
