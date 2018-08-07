import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/receipe.model';
import { Ingredient } from '../../shared/models/modele.ingredient';
import { RecipeService } from '../../../shared/recipe.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-reactive-form',
  templateUrl: './recipe-reactive-form.component.html',
  styleUrls: ['./recipe-reactive-form.component.scss']
})
export class RecipeReactiveFormComponent implements OnInit {
  ingredient = new Ingredient();
  recipe = new Recipe();
  recipeForm = this.fb.group({
    name: [''],
    picture: [''],
    description: [''] });

    ngOnInit() {
      this.getRecipe();
    }

  constructor(private _recipeService: RecipeService, private fb: FormBuilder, private _route: ActivatedRoute) {

  }
  getRecipe() {
    const id =  this._route.snapshot.paramMap.get('id');
    console.log('id: ', id);
    this._recipeService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe;
      console.log(this.recipe);
      this.recipeForm.patchValue({name: recipe.name, picture: recipe.picture, description : recipe.description} );
    }) ;
  }

  add() {
    console.log(this.recipeForm.get('name').value);
    this.recipe.name = this.recipeForm.get('name').value;
    this.recipe.picture = this.recipeForm.get('picture').value;
    this.recipe.description = this.recipeForm.get('description').value;
    console.log(this.recipe);
    this._recipeService.updateRecipe(this.recipe).subscribe();
  }
}
