import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Recipe } from '../classes/recipe.class';

@Injectable()
export class RecipeService {

     // Observable Consumer
    private _recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject([]);
    get recipes(): Observable<Recipe[]> { return this._recipes.asObservable(); }

    constructor(private http: Http) {
        this.http.get('/api/recipes')
        .map(response => response.json() as Recipe[])
        .subscribe((recipes) => {
            this._recipes.next(recipes);
        });
    }


    saveRecipe(recipe: Recipe) {
        const allRecipes = this._recipes.getValue();
        allRecipes.push(recipe);
        this._recipes.next(allRecipes);

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.http.post('/api/new-recipe', this._recipes.getValue(), options)
            .map(response => response.json())
            .subscribe((data) => {
                console.log(data);
            });
    }

}
