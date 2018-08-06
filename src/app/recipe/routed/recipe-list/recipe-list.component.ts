import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/models/receipe.model';
import { RecipeService } from '../../../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];



  constructor(
    private _recipeService: RecipeService
  ) {

  }

ngOnInit(): void {
  this._recipeService.getAllRecipe().subscribe(recipes => this.recipes =  recipes);
}



}
