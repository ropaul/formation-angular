import { Ingredient } from './modele.ingredient';

export class Recipe {
name: string;
picture: string;
description: string;
instructions: string;
ingredients: Ingredient[];
id: number;
}
