import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [FormsModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {

  constructor() {
    // Recebe o valor enviado pela navegação.
    // Se history.state.nome for null ou undefined,
    // atribui uma string vazia ("").
    this.nome = history.state?.nome ?? '';
  }

  nome = '';  // Armazena o nome digitado e recebido via state durante a navegação.

  // Injeta o serviço Router para navegar entre rotas.
  router = inject(Router);

  hello() {

    // Navega para a rota "hello"
    // enviando a variável nome através do state.
    this.router.navigate(["hello"], {
      state: {
        nome: this.nome
      }
    });
  }
}