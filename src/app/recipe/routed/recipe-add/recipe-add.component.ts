import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../shared/models/receipe.model';
import { Observable } from 'rxjs';
import { RecipeService } from '../../../shared/recipe.service';
import { Ingredient } from '../../shared/models/modele.ingredient';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent  {

   recipe = new  Recipe();
   ingredient = new Ingredient;
  constructor(private _recipeService: RecipeService) {


  }

  add() {
    this.ingredient.ingredientId = 1;
    this.ingredient.name = 'water';
    this.ingredient.quantity = 1;
    this.ingredient.unit = 'unit';
    this.recipe.ingredients =  [this.ingredient];
    console.log(this.recipe);
  this._recipeService.addRecipe(this.recipe).subscribe();
  }

}
