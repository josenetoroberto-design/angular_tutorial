import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-aula-5',
  imports: [],
  templateUrl: './aula-5.html',
  styleUrl: './aula-5.css',
})
export class Aula5 {

  count = signal(0);                              // gerencia um estado

  doubleCount = computed(() => this.count() * 2)  // computed signal (depende de outros signals)

  countLog = effect(() => {                       // toda vez que count mudar, a função do effect será executada
    console.log('Count changed: ',this.count())
  });




  menos(){
    this.count.update(valor => valor - 1);
  }

  mais(){
    this.count.update(valor => valor + 1);
  }

  reset(){
    this.count.set(0);
  }
}
