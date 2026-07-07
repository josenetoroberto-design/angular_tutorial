import { Component } from '@angular/core';

@Component({
  selector: 'app-aula-4',
  imports: [],
  templateUrl: './aula-4.html',
  styleUrl: './aula-4.css',
})
export class Aula4 {

  titulo = 'Titulo teste'

  isDisable!:boolean;

  alternar(){

    if(this.isDisable){
      this.isDisable = false;
    }
    else{
      this.isDisable = true;
    }
  }

  onClick(){
    console.log("Botão clicado");
  }
}
