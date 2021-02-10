import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ClienteService,
    private router: Router,
    private AppComponent: AppComponent
  ) { }

  pessoas: any;
  /**
   * Chama a api de get all people star wars
   * @returns void
   */
  loadPessoas(){
    this.api.getAllPessoas().subscribe(
      data => {
        this.pessoas = data.results;
      },
      error => {
        console.log("Aconteceu um erro very stranger.", error.message);
      }
    )
  };

  // Inicializa o compoent carregando lista de pessoas
  ngOnInit(): void {
        this.loadPessoas();
  };


}
