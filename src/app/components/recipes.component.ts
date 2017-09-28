import { Component } from '@angular/core';

import { Recipe } from '../classes/recipe.class';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: '../templates/recipes.component.html',
})
export class RecipesComponent {

  public recipes: Recipe[] = new Array<Recipe>();
  
  constructor(private recipeService: RecipeService) {
    this.recipeService.recipes.subscribe((data) => {
      this.recipes = data;
    });
  }

}
