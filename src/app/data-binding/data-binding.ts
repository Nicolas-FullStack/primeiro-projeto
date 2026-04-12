import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  public message: string = 'Meu primeiro Data Binding';

  public imagePath: string = 'assets/foto.webp';

  imageWidth = 300;

  isDisabled = true;

  ariaLabel = 'Fechar';

  estilizarTitulo = false;

  nomeCliente = ' ';

  // botaoFechar = `
  // border: 1px solid;
  // border-radius: 20px;
  // padding: 5px;
  // width: 30px;
  // height: 30px;
  // display: flex;
  // justify-content: center;
  // align-items: center
  // `;
//ou
botaoFechar = {
  border: '1px solid',
 'border-radius': '20px',
  padding: '5px',
  width: '30px',
  height: '30px',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center'
}

  ///botaoClass = 'botao verde'
  ///botaoClass = ['botao', 'vermelho'];
  botaoClass = {botao: true, verde: false}

  enableCloseButton(){
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstiloTitulo(){
    this.estilizarTitulo = !this.estilizarTitulo;

    this.botaoClass = {
      botao: true,
      verde: !this.botaoClass.verde
    }
  }
}
