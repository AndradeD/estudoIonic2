import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RegistrarPage } from './../registrar/registrar';
import { LoginProvider } from './../../providers/login/login-provider';
import { Credencial } from './../../model/credencial';
import { TarefasListPage } from './../tarefas-list/tarefas-list';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credencial:Credencial;

  constructor(public navCtrl: NavController, 
              public loginProvider:LoginProvider) {
                this.credencial = new Credencial();
  }

  ionViewDidLoad() {
    
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => this.navCtrl.setRoot(TarefasListPage)      
    )
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  loginWithCredencial(){
    this.loginProvider.loginWithCredentials(this.credencial);
  }

  loginWithGoogle(){
    this.loginProvider.loginComGoogle();
  }

  loginWithFacebook(){
    this.loginProvider.loginComFacebook();
  }

  sair(){
    this.loginProvider.sair();
  }


  doRegister(){
    this.navCtrl.push(RegistrarPage);
  }

}
