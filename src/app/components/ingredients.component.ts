import { Component } from '@angular/core';

import { Ingredient } from '../classes/ingredient.class';

import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'ingredients',
  templateUrl: '../templates/ingredients.component.html',
})
export class IngredientsComponent {

  public ingredients: Ingredient[] = new Array<Ingredient>();
  
  constructor(private ingredientService: IngredientService) {
    this.ingredientService.getIngredients().subscribe((data) => {
      this.ingredients = data;
    });
  }

}
