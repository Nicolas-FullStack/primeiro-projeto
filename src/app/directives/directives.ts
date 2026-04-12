import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {


    classeBotaoVerde= 'botao verde';
    classeBotaoVermelho = 'botao vermelho';

    aplicarEstiloVerde = false;
    estiloParagrafo = {'font=size': '14px', 'font-style': 'italic'}

    name = ' ';

    camposVisiveis = true;
    
    clientes = [
      {nome: 'Nicolas'},
      {nome: 'Emilly'},
      {nome: 'Douglas'},
      {nome: 'Marcelo'}
    ]

    aplicarEstilo(){
      this.aplicarEstiloVerde = !this.aplicarEstiloVerde;
    }
    alterarParaMaiusculo($event: string) {
      this.name = $event.toUpperCase();
    }
    esconderCampos(){
      this.camposVisiveis = !this.camposVisiveis;
    }
}
