import { Injectable } from '@angular/core';
import { ErrandList } from '../model/errandList';
import { Ingredient } from '../model/ingredient';
import { WeekMeals } from '../model/weekMeals';
import { RecipeService } from './recipe.service';
import { PlanningService } from './planning.service';

@Injectable()
export class ErrandListService {

  errandList: ErrandList = {
    ingredients: []
  };

  constructor(private planningService: PlanningService, private recipeService: RecipeService) { }

  /**
   * Récupère les ingrédients de toutes les recettes présentent dans le planning
   */
  getAllIngredientFromPlanning(): Ingredient[] {
    let recipesFromPlanning: WeekMeals[] = [];
    let recipesNameList: string[] = [];
    let ingredientList: Ingredient[];

    let currentPlanning = this.planningService.getPlanning();

    for (let planning of currentPlanning) {
      recipesFromPlanning.push(planning.weekMeals[0]);
    }

    // Vérification de la présence de recette par repas pour chaque jours
    for (const ing of Object.keys(recipesFromPlanning)) {
      if (recipesFromPlanning[ing]['Sunday'] !== '') {
        recipesNameList.push(recipesFromPlanning[ing]['Sunday']);
      }
      if (recipesFromPlanning[ing]['Monday'] !== '') {
        recipesNameList.push(recipesFromPlanning[ing]['Monday']);
      }
      if (recipesFromPlanning[ing]['Tuesday'] !== '') {
        recipesNameList.push(recipesFromPlanning[ing]['Tuesday']);
      }
      if (recipesFromPlanning[ing]['Wednesday'] !== '') {
        recipesNameList.push(recipesFromPlanning[ing]['Wednesday']);
      }
      if (recipesFromPlanning[ing]['Thursday'] !== '') {
        recipesNameList.push(recipesFromPlanning[ing]['Thursday']);
      }
      if (recipesFromPlanning[ing]['Friday'] !== '') {
        recipesNameList.push(recipesFromPlanning[ing]['Friday']);
      }
      if (recipesFromPlanning[ing]['Saturday'] !== '') {
        recipesNameList.push(recipesFromPlanning[ing]['Saturday']);
      }
    }

    // Récupèration de la liste des ingrédients
    ingredientList = this.recipeService.getIngredientsFromPlanningRecipe(recipesNameList);

    return ingredientList;
  }

  getErrandList(): Ingredient[] {
    this.errandList.ingredients = this.getAllIngredientFromPlanning();
    return this.errandList.ingredients;
  }

  clearErrandList(): void {

  }

  addIngredientInErrandList(): void {

  }

  deleteIngredientFromErrandList(): void {

  }

}
