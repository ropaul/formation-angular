import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../shared/recipe.service';
import { Recipe } from '../../shared/models/receipe.model';

@Component({
  selector: 'app-recipe-owerview',
  templateUrl: './recipe-owerview.component.html',
  styleUrls: ['./recipe-owerview.component.scss']
})
export class RecipeOwerviewComponent implements OnInit {

recipe: Recipe;
@Input() ingredients;

  show = false;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.getRecipe();
  }

  showDescription() {
    this.show = !this.show;
  }

  getRecipe() {
    const id =  this._route.snapshot.paramMap.get('id');
    console.log('id: ', id);
    this._recipeService.getRecipeById(id).subscribe(recipe => {
      this.recipe = recipe;
      console.log(this.recipe);
    }) ;
  }

}
