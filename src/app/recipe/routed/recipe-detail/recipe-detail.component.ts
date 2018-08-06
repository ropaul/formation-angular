import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

    @Input() recipe;
    @Input() ingredients;

    show = false;
    listMode = true;

  constructor() { }

  ngOnInit() {
  }

  showDescription() {
    this.show = !this.show;
  }

  switchMode() {
    this.listMode = !this.listMode;
  }


}
