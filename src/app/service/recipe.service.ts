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
        { name: 'Boeuf', quantity: 100, item: 'Gramme' },
        { name: 'Pomme de terre', quantity: 200, item: 'Gramme' }
      ]
    },
    { name: 'Poulet à la moutarde',
      description: 'Faite revenir le poulet dans le beurre. Mélanger la moutarde et la crème fraiche. Ajouter le mélange au poulet',
      picture: 'assets/recipe-picture/poulet+moutarde.jpg', ingredient: [
        { name: 'Filet de poulet', quantity: 1, item: 'Unité' },
        { name: 'Crème fraiche', quantity: 0.10, item: 'Litre' },
        { name: 'Moutarde', quantity: 2, item: 'Cuillère' },
        { name: 'Beurre', quantity: 10, item: 'Gramme' }
      ]
    },
    { name: 'Crevettes sautées',
      description: 'Faite sauté les crevettes dans l\'huile. Ajouter le citron.',
      picture: 'assets/recipe-picture/crevette+saute.jpg', ingredient: [
        { name: 'Crevette', quantity: 6, item: 'Unité' },
        { name: 'Jus de citron', quantity: 2, item: 'Cuillère' },
        { name: 'Huile d\'olive', quantity: 1, item: 'Cuillère' }
      ]
    }
  ];

  constructor(private ingredientService: IngredientService) { }

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  updateRecipe(recipe: Recipe, name: string, description: string, picture: string, ingredient: Ingredient[]): void {
    const idx = this.recipes.indexOf(recipe);

    let newName: string;
    let newDescription: string;
    let newPicture: string;
    let newIngredientQuantity: Ingredient[] = [];

    if (name) {
      newName = name;
      console.log('Nom : ' + name);
    } else {
      newName = recipe.name;
      console.log('NO Nom');
    }
    if (description) {
      newDescription = description;
      console.log('Recette : ' + description);
    } else {
      newDescription = recipe.description;
      console.log('NO Recette');
    }
    if (picture) {
      newPicture = picture;
      console.log('Image : ' + picture);
    } else {
      newPicture = recipe.picture;
      console.log('NO Image');
    }

    for (const ing of Object.keys(recipe['ingredient'])){
      newIngredientQuantity.push({
        name: recipe['ingredient'][ing]['name'],
        quantity: +(ingredient[recipe['ingredient'][ing]['name']]),
        item: recipe['ingredient'][ing]['item']
      });
    }

    if (newIngredientQuantity.length > 0) {
      let getOut = true;
      for (const newIng of Object.keys(newIngredientQuantity)){
        if (newIngredientQuantity[newIng]['quantity'] === 0) {
          getOut = false;
        }
      }
      if (getOut) {
        console.log('Ingredient');
      } else {
        newIngredientQuantity = recipe.ingredient;
        console.log('NO Ingredient');
      }
    } else {
      newIngredientQuantity = recipe.ingredient;
      console.log('NO Ingredient');
    }

    this.recipes.splice(idx, 1, { name: newName, description: newDescription, picture: newPicture, ingredient: newIngredientQuantity });
  }

  deleteRecipe(recipe: Recipe): void {
    const idx = this.recipes.indexOf(recipe);
    this.recipes.splice(idx, 1);
  }


  addIngredientInRecipe(recipe: Recipe, ingredient: Ingredient[]): void {

  }

  deleteIngredientFromRecipe(recipe: Recipe, ingredient: Ingredient[]): void {

  }



  useIngredientOfRecipe(): void {

  }

}
