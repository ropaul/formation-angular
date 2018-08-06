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


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ RecipeListComponent, RecipeDetailComponent, StrToArrayPipe, RecipeOwerviewComponent
  ]
})
export class RecipeRoutedModule { }
