import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { RecipeService } from '../../service/recipe.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../model/ingredient';

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

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

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

  AddIngInRecipe() {

  }

  deleteIngFromRecipe() {

  }

  makeRecipe() {
    console.log('recipe done');
  }

}
