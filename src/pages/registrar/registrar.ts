import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginProvider } from './../../providers/login/login-provider';
import { Credencial } from './../../model/credencial';

/**
 * Generated class for the RegistrarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  credencial:Credencial;

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {    
    this.credencial = new Credencial();
  }

  doRegister(){
      this.loginProvider.registrarUsuario(this.credencial);
  }

}
