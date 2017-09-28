import { Ingredient } from "./ingredient.class";

export class Recipe {

    public constructor(
        public name: string,
        public meal: number,
        public recipe_300: Ingredient[],
        public recipe_400: Ingredient[],
        public recipe_500: Ingredient[]
    ) {

    }

}