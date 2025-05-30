import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  getProdutos(): Produto[]{
    return [
      {nome: 'Notebook', promocao: true},
      {nome: 'Mouse', promocao: false},
      {nome: 'Teclado', promocao: false},
      {nome: 'PC Gamer', promocao: false},
      {nome: 'Fone Gamer', promocao: false},
    ]
  }
}
