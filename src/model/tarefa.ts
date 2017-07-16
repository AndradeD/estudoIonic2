import { TarefaState } from './tarefaState';

export class Tarefa{
    codigo:number;
    titulo:string;
    descricao?:string;
    state: TarefaState
}