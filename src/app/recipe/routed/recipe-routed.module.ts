import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { StrToArrayPipe } from '../../shared/str-to-array.pipe';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { RecipeModule } from '../recipe.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeOwerviewComponent } from './recipe-owerview/recipe-owerview.component';
import { RouterModule } from '@angular/router';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { RecipeReactiveFormComponent } from './recipe-reactive-form/recipe-reactive-form.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    // FormBuilder,
    // Validators


  ],
  declarations: [ RecipeListComponent, RecipeDetailComponent,
     StrToArrayPipe, RecipeOwerviewComponent, RecipeAddComponent, RecipeReactiveFormComponent
  ]
})
export class RecipeRoutedModule { }
