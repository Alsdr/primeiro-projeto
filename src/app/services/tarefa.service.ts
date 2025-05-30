import { Injectable } from '@angular/core';
import {Tarefa} from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  getTarefas(): Tarefa[] {
    return [
      {titulo:"Estudar Angular", descricao:"Fazer um componente de tarefas",  concluido:false},
      {titulo:"Exercios", descricao:"Concluir a lista de exercicios.",  concluido:false},
      {titulo:"Estudar Angular", descricao:"Fazer um componente de tarefas",  concluido:false},
    ]
  }
}
