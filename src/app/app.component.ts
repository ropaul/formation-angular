import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe/shared/models/receipe.model';
import { RecipeService } from './shared/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'cocktail : africa by toto';
}
