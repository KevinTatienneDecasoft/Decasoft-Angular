import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { Recipe } from '../model/recipe';

@Injectable()
export class IngredientService {

  ingredients: Ingredient[] = [
    { name: 'oeuf', quantity: 5, item: 'unité' },
    { name: 'pomme de terre', quantity: 200, item: 'gramme' },
    { name: 'lait', quantity: 1, item: 'litre' },
    { name: 'boeuf', quantity: 500, item: 'gramme' }
  ];

  constructor() { }

  getAllIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.unshift(ingredient);
  }

  updateIngredient(ingredient: Ingredient, newQuantity: number): void {
    const idx = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(idx, 1, { name: ingredient.name, quantity: newQuantity, item: ingredient.item });
  }

  deleteIngredient(ingredient: Ingredient): void {
    const idx = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(idx, 1);
  }

  useIngredientOfRecipe(recipe: Recipe): void {

    let recipeAllow = true;
    let newIngredientsQuantity: Ingredient[] = [];
    let alertToShow = 'La recette est non réalisable : ';

    for (let ingInRec of recipe.ingredient) {
      let ingFind = false;
      for (let ing of this.ingredients) {
        if (ingInRec.name === ing.name) {
          if (ingInRec.quantity > ing.quantity) {
            alertToShow = alertToShow + '[Pas assez de ' + ingInRec.name +  ']';
            ingFind = true;
            recipeAllow = false;
          } else {
            newIngredientsQuantity.push({ name: ingInRec.name, quantity: (ing.quantity - ingInRec.quantity), item: ingInRec.item });
            ingFind = true;
          }
        }
      }
      if (!ingFind) {
        alertToShow = alertToShow + '[Pas de ' + ingInRec.name +  ']';
        recipeAllow = false;
        break;
      }
    }
    if (recipeAllow) {
      for (let ingToDel of newIngredientsQuantity) {
        const idxOfIng = this.ingredients.findIndex(ingredient => ingredient.name === ingToDel.name);
        this.ingredients.splice(idxOfIng, 1);

        if (ingToDel.quantity > 0) {
          this.ingredients.unshift(ingToDel);
        }
      }
      alert('La recette a été réalisé');
    } else {
      alert(alertToShow);
    }


  }

}
