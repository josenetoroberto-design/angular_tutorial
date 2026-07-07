import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  imports: [FormsModule],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css',
})
export class HelloWorld {

  constructor(){
    this.nome = history.state?.nome ?? '';
  }

  nome = '';

  router = inject(Router);

  principal(){

    this.router.navigate(["principal"],
      {state: {nome: this.nome}});
  }
}
