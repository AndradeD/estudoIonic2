import { Component, Input } from '@angular/core';
import { Tarefa } from './../../model/tarefa';

/**
 * Generated class for the TarefaListItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tarefa-list-item',
  templateUrl: 'tarefa-list-item.html'
})
export class TarefaListItemComponent {
  
  @Input()
  tarefa:Tarefa;

}
