import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-my-fridge',
  templateUrl: './my-fridge.component.html',
  styleUrls: ['./my-fridge.component.css']
})
export class MyFridgeComponent implements OnInit {

  ingredients: Ingredient[];

  name: string;
  quantity: number;
  item: string;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getAllIngredients();
  }

  addIngredient() {
    if (this.name && this.quantity && this.item) {
      this.ingredientService.addIngredient({
        name: this.name,
        quantity: this.quantity,
        item: this.item
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

}
