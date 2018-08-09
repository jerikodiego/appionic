import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titulo :number;

  constructor(public navCtrl: NavController) {

    this.titulo = 1;
  }

  aumentar  ()  : void 
  {
    this.titulo++;
  }

}
