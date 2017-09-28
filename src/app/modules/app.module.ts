import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../components/app.component';
import { HomeComponent } from '../components/home.component';
import { IngredientsComponent } from '../components/ingredients.component';
import { RecipesComponent } from '../components/recipes.component';
import { NewRecipeComponent } from '../components/new_recipe.component';
import { ErrorComponent } from '../components/error.component';

import { IngredientService } from '../services/ingredient.service';
import { RecipeService } from '../services/recipe.service';

const appRoutes: Routes = [
  { path: 'Ingredients', component: IngredientsComponent },
  { path: 'Recipes', component: RecipesComponent },
  { path: 'NewRecipe', component: NewRecipeComponent },
  { path: '', component:  HomeComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientsComponent,
    RecipesComponent,
    ErrorComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [
    IngredientService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
