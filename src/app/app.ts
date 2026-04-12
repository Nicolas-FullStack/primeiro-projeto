import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {AuthService} from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private authService: AuthService){

  }

  podeAcessar: boolean = false;

  ngOnInit(){

    this.podeAcessar = this.authService.podeAcessar();
  }

  alterarAcesso(e: any){
    
    this.authService.update(e.target.checked);
  }
}
