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

  nameRecipe: string;
  description: string;
  picture: string;
  currentIngredients: Ingredient[] = [];

  nameIng: string;
  quantityIng: number;
  itemIng: string;

  addRec = false;

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  allowAddRecipe() {
    if (this.addRec) {
      this.addRec = false;
    } else {
      this.addRec = true;
    }
  }

  addRecipe() {
    if (this.nameRecipe && this.description && (this.currentIngredients.length > 0)) {
      this.recipeService.addRecipe({
        name: this.nameRecipe,
        description: this.description,
        picture: this.picture,
        ingredient: this.currentIngredients
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  AddIngInRecipe() {
    if (this.nameIng && this.quantityIng && this.itemIng) {
      this.currentIngredients.push({ name: this.nameIng, quantity: this.quantityIng, item: this.itemIng });
    } else {
      alert('Ingrédient Incorrect');
    }
  }

}
