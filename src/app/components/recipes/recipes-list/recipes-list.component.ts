import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Classic hamburger and french fries on wooden board', 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Recipe('Chicken and Vegetables', 'Dish With Rice, Chicken and Vegetables', 'https://images.pexels.com/photos/9673721/pexels-photo-9673721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
  ];
}
