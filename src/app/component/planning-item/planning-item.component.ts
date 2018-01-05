import { Component, OnInit, Input } from '@angular/core';
import { Planning } from '../../model/planning';
import { WeekMeals } from '../../model/weekMeals';
import { PlanningService } from '../../service/planning.service';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-planning-item',
  templateUrl: './planning-item.component.html',
  styleUrls: ['./planning-item.component.css']
})
export class PlanningItemComponent implements OnInit {

  @Input()
  meal: Planning;

  dayMeal: WeekMeals;
  recipes: Recipe[];
  keys: any[];

  choiceRec = false;

  constructor(private planningService: PlanningService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.dayMeal = this.meal.weekMeals[0];
    this.keys = Object.keys(this.dayMeal);
    this.recipes = this.recipeService.getAllRecipes();
  }

  chooseRecipe() {
    if (this.choiceRec) {
      this.choiceRec = false;
    } else {
      this.choiceRec = true;
    }
  }

  addRecipe(event: Event) {
    const daySelected = (<HTMLInputElement>event.target).id;
    const recipeSelected = (<HTMLInputElement>event.target).innerHTML;
    let recipeSelectedTrue = recipeSelected.replace('<br _ngcontent-c3="">', '');

    this.planningService.addRecipeInDay(this.meal, daySelected, recipeSelectedTrue);
  }

}
