import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../products/product';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly cartItems = signal<CartItem[]>([]);

  /*

  O método .reduce() é usado para reduzir um array a um único valor.

  array.reduce((acumulador, elementoAtual) => {
    // lógica
    return novoAcumulador;
  }, valorInicial);

  */

  readonly totalItems = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  addToCart(product:Product){

    this.cartItems.update((items) => {

      //O método .find() é usado para procurar o primeiro elemento de um array que satisfaça uma condição.
      const existingItem = items.find((item) => item.product.id === product.id);

      if(existingItem){

        /*
        O método .map() é usado para criar um novo array transformando
         cada elemento do array original.

        const numeros = [1, 2, 3, 4];
        const dobro = numeros.map((numero) => numero * 2);
        console.log(dobro);
        */

        return items.map((item) =>
          item.product.id === product.id ? {...item, quantity: item.quantity +1}
          : item
        );
      }

      return [...items, {product, quantity:1}]
    });
  }
}
