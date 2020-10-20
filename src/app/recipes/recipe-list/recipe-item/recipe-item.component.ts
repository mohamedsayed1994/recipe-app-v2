import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
