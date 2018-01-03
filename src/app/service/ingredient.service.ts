import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../model/ingredient';

@Injectable()
export class IngredientService {

  ingredients: Ingredient[] = [
    { name: 'Oeuf', quantity: 5, item: 'Unité' },
    { name: 'Lait', quantity: 1, item: 'Litre' },
    { name: 'Boeuf', quantity: 500, item: 'Gramme' }
  ];

  constructor() { }

  getAllIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  updateIngredient(ingredient: Ingredient, newQuantity: number): void {
    const idx = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(idx, 1, { name: ingredient.name, quantity: newQuantity, item: ingredient.item });
  }

  deleteIngredient(ingredient: Ingredient): void {
    const idx = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(idx, 1);
  }

}
