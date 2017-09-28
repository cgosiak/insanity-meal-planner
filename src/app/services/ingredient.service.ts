import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Ingredient } from '../classes/ingredient.class';

@Injectable()
export class IngredientService {

    constructor(private http: Http) {

    }

    getIngredients(): Observable<Ingredient[]> {
        return this.http.get('/api/ingredients')
                        .map(response => response.json() as Ingredient[]);
    }

}