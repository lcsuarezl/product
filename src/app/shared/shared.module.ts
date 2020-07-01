import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StartComponent
  ],
  exports: [
    StartComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
