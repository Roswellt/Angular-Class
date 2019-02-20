import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spaguetti',
        'Simple recipe',
        'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
        [
            new Ingredient("Pasta", 2),
            new Ingredient("Sauce", 1)
        ]),
        new Recipe('Better Spaguetti',
        'Simple recipe',
        'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
        [
            new Ingredient("Pasta", 2),
            new Ingredient("Sauce", 1),
            new Ingredient("Meatballs", 5)
        ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}