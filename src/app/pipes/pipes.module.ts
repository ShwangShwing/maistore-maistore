import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysPipe } from './keys.pipe';
import { RatingPipe } from './rating.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [KeysPipe, RatingPipe],
  exports: [KeysPipe, RatingPipe]
})
export class PipesModule { }
