import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from '../recipe/shared/recipe.mock';
import { Recipe } from '../recipe/shared/models/receipe.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl = 'http://10.0.1.229:8080/api/v1/recipes';



  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllRecipe(): Observable<Recipe[]> {
    // return this.httpClient.get<Recipe[]>(this.recipeUrl);
    return of(MOCK_RECIPES);
  }

getRecipeById(id: string): Observable<Recipe> {
  return this.httpClient.get<Recipe>(`${this.recipeUrl}/${id}`);
}

}
