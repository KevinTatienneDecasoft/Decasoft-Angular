import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'app-errand-list-item',
  templateUrl: './errand-list-item.component.html',
  styleUrls: ['./errand-list-item.component.css']
})
export class ErrandListItemComponent implements OnInit {

  @Input()
  ingredient: Ingredient;

  newQuantity: number;
  updateIng = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Permet de changer le statut en modification ou non
   */
  allowUpdate() {
    if (this.updateIng) {
      this.updateIng = false;
    } else {
      this.updateIng = true;
    }
  }

  buyIngredient() {

  }

  updateIngredient() {
  }

  deleteIngredient() {
  }

}
