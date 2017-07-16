import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Tarefa } from './../../model/tarefa';
import { TarefaProvider } from './../../providers/tarefa/tarefa';

/**
 * Generated class for the TarefasListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  tarefas: Array<Tarefa>
  constructor(public navCtrl: NavController, 
              public tarefaProvider : TarefaProvider) {
  }

  ionViewDidLoad() {
    this.tarefas = this.tarefaProvider.getAll();
  }

}
