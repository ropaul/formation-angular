import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RecipeService } from '../../../shared/recipe.service';
import { Recipe } from '../../shared/models/receipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

    @Input() recipe;
    // @Input() ingredients;
    @Output() delete: EventEmitter<Recipe> = new EventEmitter();

    show = false;
    listMode = true;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.recipe);
  }

  showDescription() {
    this.show = !this.show;
  }

  switchMode() {
    this.listMode = !this.listMode;
  }

  handleDelete() {
    console.log(this.recipe);
    this._recipeService.deleteRecipe(this.recipe.id).subscribe(() => this.delete.emit(this.recipe));

  }

toogle() {

}


}
