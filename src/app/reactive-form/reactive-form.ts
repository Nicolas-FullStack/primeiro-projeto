import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css'],
})
export class ReactiveForm {

  profileForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) {

    this.profileForm = this.formbuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      address: this.formbuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      nickname: this.formbuilder.array([ this.formbuilder.control('')])
    });
  }

  get apelidos() {
    return this.profileForm.get('nickname') as FormArray;
  }

  // Utilizando FormGroup e FormControl
  // profileForm =  new FormGroup({
  //   name: new FormControl(' '),
  //   cpf: new FormControl(' '),
  //   address: new FormGroup(
  //     {
  //       street: new FormControl(''),
  //       city: new  FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl('')
  //     }
  //   )
  // })

  preencherFormulario() {
    this.profileForm.patchValue({
      name: 'Nicolas',
      cpf: '1234567890',
      address: {
        street: 'Rua Brasil',
        city: 'Perus',
        state: 'SP',
        zip: '64784723'
      }
    });
  }

  adicionarApelido(){
    this.apelidos.push(this.formbuilder.control(''));
  }

  submitForm() {
    console.warn(this.profileForm.value);
  }
}
