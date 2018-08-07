import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    RouterTestingModule
  ],
  declarations: []
})
export class RecipeRoutingModule { }
