import { Ingredient } from './ingredient';

export interface Recipe {
    name: string;
    description: string;
    picture: string;
    ingredient: Ingredient[];
}
