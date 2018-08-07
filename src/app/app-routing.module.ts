import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe/routed/recipe-list/recipe-list.component';
import {Routes, RouterModule} from '@angular/router';
import { RecipeDetailComponent } from './recipe/routed/recipe-detail/recipe-detail.component';
import { RecipeOwerviewComponent } from './recipe/routed/recipe-owerview/recipe-owerview.component';
import { RecipeAddComponent } from './recipe/routed/recipe-add/recipe-add.component';
import { RecipeReactiveFormComponent } from './recipe/routed/recipe-reactive-form/recipe-reactive-form.component';


const routes: Routes = [
  {
    path: 'recipe/reactive/:id',
    component: RecipeReactiveFormComponent
  },
  {
    path: 'recipe/add',
    component: RecipeAddComponent
  },
  {
    path: 'recipe',
    component: RecipeListComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeOwerviewComponent
  },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
