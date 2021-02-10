import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formCliente: FormGroup;

  // receber instancia de formbuilder utilizando injeção dependencia
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      name: [cliente.name],
      height: [cliente.height],
      birth_year: [cliente.birth_year]
    })
  }

  onSubmit() {
    // fazer lógica de salvar formulario
    console.log(this.formCliente.value);

    // limpar formulario
    this.formCliente.reset(new Cliente());
  }
}
