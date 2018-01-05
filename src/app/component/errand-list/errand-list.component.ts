import { Component, OnInit } from '@angular/core';
import { ErrandListService } from '../../service/errand-list.service';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'app-errand-list',
  templateUrl: './errand-list.component.html',
  styleUrls: ['./errand-list.component.css']
})
export class ErrandListComponent implements OnInit {

  ingredients: Ingredient[];

  name: string;
  quantity: number;
  item: string;

  constructor(private errandListService: ErrandListService) { }

  ngOnInit() {
    this.ingredients = this.errandListService.getErrandList();
  }

  addIngredient() {
    // if (this.name && this.quantity && this.item) {
    //   this.ingredientService.addIngredient({
    //     name: this.name,
    //     quantity: this.quantity,
    //     item: this.item
    //   });
    // } else {
    //   alert('Veuillez remplir tous les champs');
    // }
  }

}
