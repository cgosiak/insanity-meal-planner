import { Component } from '@angular/core';

import { Recipe } from '../classes/recipe.class';
import { Ingredient } from '../classes/ingredient.class';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'new-recipe',
  templateUrl: '../templates/new_recipe.component.html',
})
export class NewRecipeComponent {

  public recipe: Recipe = new Recipe('', 0, new Array<Ingredient>(), new Array<Ingredient>(), new Array<Ingredient>());
  constructor(private recipeService: RecipeService) {}

  public save() {
    this.recipeService.saveRecipe(this.recipe);
  }

}
