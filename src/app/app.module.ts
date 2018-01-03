import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MyRecipeComponent } from './component/my-recipe/my-recipe.component';
import { MyFridgeComponent } from './component/my-fridge/my-fridge.component';
import { PlanningComponent } from './component/planning/planning.component';
import { ErrandListComponent } from './component/errand-list/errand-list.component';
import { HeaderComponent } from './component/header/header.component';
import { IngredientService } from './service/ingredient.service';
import { RecipeService } from './service/recipe.service';
import { MyFridgeItemComponent } from './component/my-fridge-item/my-fridge-item.component';
import { MyRecipeItemComponent } from './component/my-recipe-item/my-recipe-item.component';


const appRoutes: Routes = [
  { path: '', component: MyFridgeComponent },
  { path: 'myRecipe', component: MyRecipeComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'errandList', component: ErrandListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyRecipeComponent,
    MyFridgeComponent,
    PlanningComponent,
    ErrandListComponent,
    HeaderComponent,
    MyFridgeItemComponent,
    MyRecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    IngredientService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
