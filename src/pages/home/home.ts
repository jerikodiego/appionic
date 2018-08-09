import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titulo :number;
  titulo2 :string

  constructor(public navCtrl: NavController) {

    this.titulo = 1;
    this.titulo2 = "Servicios ya!";
  }

  aumentar  ()  : void 
  {
    this.titulo++;
  }




}
