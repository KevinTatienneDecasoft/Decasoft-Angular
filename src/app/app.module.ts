import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import localeFr from '@angular/common/locales/fr';

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
import { PlanningService } from './service/planning.service';
import { PlanningItemComponent } from './component/planning-item/planning-item.component';
import { ErrandListService } from './service/errand-list.service';
import { ErrandListItemComponent } from './component/errand-list-item/errand-list-item.component';

registerLocaleData(localeFr);

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
    MyRecipeItemComponent,
    PlanningItemComponent,
    ErrandListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    IngredientService,
    RecipeService,
    PlanningService,
    ErrandListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
