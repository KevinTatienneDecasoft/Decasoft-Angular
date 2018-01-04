import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../service/recipe.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../model/ingredient';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-my-recipe-item',
  templateUrl: './my-recipe-item.component.html',
  styleUrls: ['./my-recipe-item.component.css']
})
export class MyRecipeItemComponent implements OnInit {

  @Input()
  recipe: Recipe;

  newName: string;
  newPicture: string;
  newIngredient: Ingredient[];
  newDescription: string;
  updateRec = false;

  addIngInRec = false;
  nameIng: string;
  quantityIng: number;
  itemIng: string;

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  /**
   * Permet de changer le statut en modification ou non
   */
  allowUpdate() {
    if (this.updateRec) {
      this.updateRec = false;
    } else {
      this.updateRec = true;
    }
  }

  updateRecipe(form: NgForm) {
    this.newIngredient = JSON.parse(JSON.stringify(form.value));
    this.recipeService.updateRecipe(this.recipe, this.newName, this.newDescription, this.newPicture, this.newIngredient);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe);
  }

  /**
   * Permet de changer le statut en modification ou non
   */
  AllowAddIngInRecipe() {
    if (this.addIngInRec) {
      this.addIngInRec = false;
    } else {
      this.addIngInRec = true;
    }
  }

  /**
   * Ajout d'ingrédients dans la recette
   */
  AddIngInRecipe() {
    if (this.nameIng && this.quantityIng && this.itemIng) {
    this.recipeService.addIngredientInRecipe(this.recipe,
      {
        name: this.nameIng,
        quantity: this.quantityIng,
        item: this.itemIng
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  /**
   * Suppression d'ingrédients dans la recette
   */
  deleteIngFromRecipe(event: Event) {
    const ingNameToDelete = (<HTMLInputElement>event.target).id;
    this.recipeService.deleteIngredientFromRecipe(this.recipe, ingNameToDelete);
  }

  /**
   * Réalisation de la recette
   */
  makeRecipe() {
    this.ingredientService.useIngredientOfRecipe(this.recipe);
  }

}
