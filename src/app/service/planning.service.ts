import { Injectable } from '@angular/core';
import { Planning } from '../model/planning';
import { WeekMeals } from '../model/weekMeals';

@Injectable()
export class PlanningService {

  plannings: Planning[] = [
    {
      timeMeal: 'Petit Déjeuner',
      idMeal: 'Breakfast',
      weekMeals: [{ Sunday: '', Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '' }]
    },
    {
      timeMeal: 'Déjeuner',
      idMeal: 'Lunch',
      weekMeals: [{ Sunday: '', Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '' }]
    },
    {
      timeMeal: 'Diner',
      idMeal: 'Dinner',
      weekMeals: [{ Sunday: '', Monday: '', Tuesday: '', Wednesday: '', Thursday: '', Friday: '', Saturday: '' }]
    }
  ];

  constructor() { }

  getPlanning(): Planning[] {
    return this.plannings;
  }

  addRecipeInDay(planning: Planning, day: string, recipe: string) {
    const idx = this.plannings.indexOf(planning);

    let newWeekMeals: WeekMeals[] =  [];

    for (const ing of Object.keys(planning['weekMeals'])) {
      newWeekMeals.push({
        Sunday: planning['weekMeals'][ing]['Sunday'],
        Monday: planning['weekMeals'][ing]['Monday'],
        Tuesday: planning['weekMeals'][ing]['Tuesday'],
        Wednesday: planning['weekMeals'][ing]['Wednesday'],
        Thursday: planning['weekMeals'][ing]['Thursday'],
        Friday: planning['weekMeals'][ing]['Friday'],
        Saturday: planning['weekMeals'][ing]['Saturday'],
      });
    }

    newWeekMeals[0][day] = recipe;

    this.plannings.splice(idx, 1, { timeMeal: planning.timeMeal, idMeal: planning.idMeal, weekMeals: newWeekMeals });
  }

}
