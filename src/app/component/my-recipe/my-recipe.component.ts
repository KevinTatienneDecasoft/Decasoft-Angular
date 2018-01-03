import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { Ingredient } from '../../model/ingredient';
import { RecipeService } from '../../service/recipe.service';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css']
})
export class MyRecipeComponent implements OnInit {

  recipes: Recipe[];
  ingredients: Ingredient[];

  nameRecipe: string;
  description: string;
  picture: string;
  ingredient: Ingredient[];

  nameIngredient: string;
  quantity: number;
  item: string;

  addRec = false;

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
    this.ingredients = this.ingredientService.getAllIngredients();
  }

  allowAddRecipe() {
    if (this.addRec) {
      this.addRec = false;
    } else {
      this.addRec = true;
    }
  }

  addRecipe() {
    this.recipeService.addRecipe({
      name: this.nameRecipe,
      description: this.description,
      picture: this.picture,
      ingredient: this.ingredient
    });
  }

}
