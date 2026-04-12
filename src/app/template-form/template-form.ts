import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  model = new Customer(null, '', null);

  generos = ['Masculino', 'Feminino', 'Prefiro não informar'];

  submitted = false;

  onSubmit(){
    this.submitted = true;

    console.warn(this.model)
  }
}
