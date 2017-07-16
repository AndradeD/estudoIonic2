import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { RegistrarPage } from './../pages/registrar/registrar';
import { LoginProvider } from './../providers/login/login-provider';
import firebase from "firebase";
import { TarefaListItemComponent } from '../components/tarefa-list-item/tarefa-list-item';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import { TarefasListPage } from './../pages/tarefas-list/tarefas-list';
import { TarefasAddPage } from './../pages/tarefas-add/tarefas-add';

const firebaseConfig = {
    apiKey: "AIzaSyCuxTayllLM9HO8cwA7TqBL8DqmglmFtVI",
    authDomain: "listadordetarefas-b3b03.firebaseapp.com",
    databaseURL: "https://listadordetarefas-b3b03.firebaseio.com",
    projectId: "listadordetarefas-b3b03",
    storageBucket: "listadordetarefas-b3b03.appspot.com",
    messagingSenderId: "523476193415"
};  

@NgModule({
  declarations: [
    MyApp,    
    LoginPage,
    RegistrarPage,
    TarefaListItemComponent,
    TarefasListPage,
    TarefasAddPage,    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    LoginPage,
    RegistrarPage,
    TarefaListItemComponent,
    TarefasListPage,
    TarefasAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    LoginProvider,
    TarefaProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
