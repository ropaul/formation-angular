import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatSelectModule, MatOptionModule} from '@angular/material/';
import { TestDirective } from './test.directive';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [MatToolbarModule, MatCardModule, MatFormFieldModule, MatButtonModule, MatSelectModule, MatOptionModule],
  declarations: [TestDirective]
})
export class SharedModule { }
