import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarioPage } from './mario';

@NgModule({
  declarations: [
    MarioPage,
  ],
  imports: [
    IonicPageModule.forChild(MarioPage),
  ],
})
export class MarioPageModule {}
