import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListComponent } from './recipe-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MOCK_RECIPES } from '../../shared/recipe.mock';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, NoopAnimationsModule, HttpClientTestingModule],
      declarations: [ RecipeListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    component.recipes = MOCK_RECIPES;
    fixture.detectChanges();

  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fdescribe('Action delete',  () => {

    it('list should be different after delete', () => {
      const deletedRecipe = MOCK_RECIPES[0];
      const lengthList = MOCK_RECIPES.length;


      component.handleDelete(deletedRecipe);



      expect(component.recipes.length).toBeLessThan(lengthList);
    });

  });

});
