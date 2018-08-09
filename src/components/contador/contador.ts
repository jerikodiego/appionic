import { Component, Input } from '@angular/core';

/**
 * Generated class for the ContadorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contador',
  templateUrl: 'contador.html'
})
export class ContadorComponent {

  @Input()
  text: string;

  contador: number;
  constructor() {
    console.log('Hello ContadorComponent Component');
    this.contador  = 0;
  }

  aumentar() 
  {
    this.contador++;
  }

  guardar() {
    //this.service.guardar(texto, contador);
    alert("Se guardo" + this.text + "-" + this.contador);
  }

}
