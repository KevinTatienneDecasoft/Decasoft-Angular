import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';
import { IngredientService } from './ingredient.service';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    { name: 'Steak Frites',
      description: 'Eplucher et couper les pommes de terre. Cuire les frites dans la friteuse. Cuire le steak à la pôele.',
      picture: 'assets/recipe-picture/steak+frite.jpg', ingredient: [
        { name: 'boeuf', quantity: 100, item: 'gramme' },
        { name: 'pomme de terre', quantity: 200, item: 'gramme' }
      ]
    },
    { name: 'Poulet à la moutarde',
      description: 'Faite revenir le poulet dans le beurre. Mélanger la moutarde et la crème fraiche. Ajouter le mélange au poulet',
      picture: 'assets/recipe-picture/poulet+moutarde.jpg', ingredient: [
        { name: 'filet de poulet', quantity: 1, item: 'unité' },
        { name: 'crème fraiche', quantity: 0.10, item: 'litre' },
        { name: 'moutarde', quantity: 0.10, item: 'litre' },
        { name: 'beurre', quantity: 10, item: 'gramme' }
      ]
    },
    { name: 'Crevettes sautées',
      description: 'Faite sauté les crevettes dans l\'huile. Ajouter le citron.',
      picture: 'assets/recipe-picture/crevette+saute.jpg', ingredient: [
        { name: 'crevette', quantity: 6, item: 'unité' },
        { name: 'jus de citron', quantity: 0.10, item: 'litre' },
        { name: 'huile d\'olive', quantity: 0.10, item: 'litre' }
      ]
    }
  ];

  constructor(private ingredientService: IngredientService) { }

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.unshift(recipe);
  }

  updateRecipe(recipe: Recipe, name: string, description: string, picture: string, ingredient: Ingredient[]): void {
    const idx = this.recipes.indexOf(recipe);

    let newName: string;
    let newDescription: string;
    let newPicture: string;
    let newIngredientQuantity: Ingredient[] = [];
    let alertToShow = 'Veuillez indiquer : ';

    // Vérification de la présence de tous les champs
    if (name) {
      newName = name;
    } else {
      newName = recipe.name;
      alertToShow = alertToShow + '[le nom] ';
    }
    if (description) {
      newDescription = description;
    } else {
      newDescription = recipe.description;
      alertToShow = alertToShow + '[la recette] ';
    }
    if (picture) {
      newPicture = picture;
    } else {
      newPicture = recipe.picture;
      alertToShow = alertToShow + '[l\'image] ';
    }

    // Création des nouvelles quantités d'ingrédients
    for (const ing of Object.keys(recipe['ingredient'])){
      newIngredientQuantity.push({
        name: recipe['ingredient'][ing]['name'],
        quantity: +(ingredient[recipe['ingredient'][ing]['name']]),
        item: recipe['ingredient'][ing]['item']
      });
    }

    // Vérifie la présence d'ingrédients
    if (newIngredientQuantity.length > 0) {
      let getOut = true;

      // Vérifie la quantité des ingrédients
      for (const newIng of Object.keys(newIngredientQuantity)){
        if (newIngredientQuantity[newIng]['quantity'] === 0) {
          getOut = false;
        }
      }
      if (!getOut) {
        newIngredientQuantity = recipe.ingredient;
        console.log('NO Ingredient');
        alertToShow = alertToShow + '[le ou les ingredients] ';
      }
    } else {
      newIngredientQuantity = recipe.ingredient;
      console.log('NO Ingredient');
      alertToShow = alertToShow + '[le ou les ingredients] ';
    }

    if (alertToShow !== '') {
      alert(alertToShow);
    }

    this.recipes.splice(idx, 1, { name: newName, description: newDescription, picture: newPicture, ingredient: newIngredientQuantity });
  }

  deleteRecipe(recipe: Recipe): void {
    const idx = this.recipes.indexOf(recipe);
    this.recipes.splice(idx, 1);
  }


  addIngredientInRecipe(recipe: Recipe, ingredient: Ingredient): void {

    const idx = this.recipes.indexOf(recipe);
    let newIngredients: Ingredient[] = recipe.ingredient;

    newIngredients.push(ingredient);

    this.recipes.splice(idx, 1,
      {
        name: recipe.name,
        description: recipe.description,
        picture: recipe.picture,
        ingredient: newIngredients
      }
    );
  }

  deleteIngredientFromRecipe(recipe: Recipe, ingredientName: string): void {

    const idx = this.recipes.indexOf(recipe);
    let newIngredients: Ingredient[] = recipe.ingredient;
    const idxOfIng = newIngredients.findIndex(newIngredient => newIngredient.name === ingredientName);

    newIngredients.splice(idxOfIng, 1);

    this.recipes.splice(idx, 1,
      {
        name: recipe.name,
        description: recipe.description,
        picture: recipe.picture,
        ingredient: newIngredients
      }
    );
  }

}
