import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureBringFrontDirective } from './picture-bring-front.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PictureBringFrontDirective],
  exports: [PictureBringFrontDirective]
})
export class DirectivesModule { }
