import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-my-fridge-item',
  templateUrl: './my-fridge-item.component.html',
  styleUrls: ['./my-fridge-item.component.css']
})
export class MyFridgeItemComponent implements OnInit {

  @Input()
  ingredient: Ingredient;

  newQuantity: number;
  updateIng = false;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  allowUpdate() {
    if (this.updateIng) {
      this.updateIng = false;
    } else {
      this.updateIng = true;
    }
  }

  updateIngredient() {
    this.ingredientService.updateIngredient(this.ingredient, this.newQuantity);
  }

  deleteIngredient() {
    this.ingredientService.deleteIngredient(this.ingredient);
  }

}
